import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../../../service/dialog.service';
import { SnackbarService } from '../../assets/snackbar.service';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Propiedad } from '../../models/propiedades.response';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [MatDialogClose,MatDialogTitle,MatDialogActions,MatDialogContent,ReactiveFormsModule,MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  propiedadOriginal: Propiedad | null = null;
  formGroup: FormGroup;
  displayedColumns: string[] = ['nro', 'propietario', 'tipo_propiedad', 'direccion', 'fecha_alta', 'acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<Propiedad>([]);
  isLoading: boolean = true;

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private apiService: ApiService, private router: Router, private dialogService: DialogService, private fb: FormBuilder, private snackbarService: SnackbarService) {
    this.formGroup = this.fb.group({
      propietario: [''],
      tipo: [''],
      direccion: ['']
    });
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.llenarData();
  }

  openDialogCustom(propiedad: Propiedad, template: TemplateRef<any>) {
    this.propiedadOriginal = propiedad;
    this.formGroup.patchValue(propiedad);
    this.dialogService.openDialogPropiedad( propiedad, template );
  }


  onSave() {
    this.formGroup.patchValue({
      id_propiedad: this.propiedadOriginal?.id_propiedad
    });
    const propiedadModificada: Propiedad = this.formGroup.value;
    const id = this.propiedadOriginal?.id_propiedad;
    console.log('Propiedad modificada: ', propiedadModificada);
    console.log('ID de la propiedad original: ', id);

    // En pausa hasta resolver la lógica de poder elegir otro propietario

    // if (id !== undefined) {
    //   const propietarioModificado: Propietario = { ...this.formGroup.value };
    //   this.apiService.editPropietario(id, propietarioModificado).subscribe(
    //     response => {
    //       this.snackbarService.openSnackBar(`Propietario nro. ${id} editado correctamente!`, 'Cerrar', 3000);
    //     },
    //     Error => {
    //       this.snackbarService.openSnackBar('Error al editar el propietario', 'Cerrar', 3000);
    //     }
    //   );
    // } else {
    //   console.error('No se pudo obtener el ID del propietario original');
    // }
  }

  llenarData() {
    this.apiService.getAllProperty().subscribe(data => {
      this.data = data.map((propiedad: Propiedad, index: number) => ({
        id_propiedad: propiedad.id_propiedad,
        propietario: propiedad.propietario.nombre + ', ' + propiedad.propietario.apellido,
        tipo: propiedad.tipo,
        direccion: propiedad.direccion,
        fecha_alta: this.formatoFecha(propiedad.fecha_alta)
      }));
      this.dataSource.data = this.data;
      this.isLoading = false;
    });
  }
  formatoFecha(fecha: string): string {
    const partesFecha = fecha.split('-');
    const fechaFormateada = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;
    return fechaFormateada;
  }
}

