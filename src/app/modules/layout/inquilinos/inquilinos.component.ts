import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { InquilinoResponse } from '../../models/inquilino.response';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { SnackbarService } from '../../assets/snackbar.service';
import { DialogService } from '../../../service/dialog.service';
import { Propiedad } from '../../models/propiedades.response';



@Component({
  selector: 'app-inquilinos',
  standalone: true,
  imports: [MatDialogClose,MatDialogTitle,MatDialogActions,MatDialogContent,ReactiveFormsModule,MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './inquilinos.component.html',
  styleUrl: './inquilinos.component.css'
})


export class InquilinosComponent implements AfterViewInit {
  inquilinoOriginal: InquilinoResponse | null = null;
  formGroup: FormGroup;
  public inquilinoResponse: InquilinoResponse[] = [];
  dataSource = new MatTableDataSource<InquilinoResponse>([]);
  data: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'fecha_alta', 'acciones'];
  isLoading: boolean = true;

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private apiService: ApiService, private router: Router, private dialogService: DialogService, private fb: FormBuilder, private snackbarService: SnackbarService) {
    this.formGroup = this.fb.group({
      nombre: [''],
      apellido: [''],
      dni: ['']
    });
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.llenarData();
  }

  openDialogCustom(inquilino: InquilinoResponse, template: TemplateRef<any>) {
    this.inquilinoOriginal = inquilino;
    this.formGroup.patchValue(inquilino);
    this.dialogService.openDialogInquilino( inquilino, template );
  }


  onSave() {
    this.formGroup.patchValue({
      id_inquilino: this.inquilinoOriginal?.id_inquilino
    });
    const inquilinoModificado: Propiedad = this.formGroup.value;
    const id = this.inquilinoOriginal?.id_inquilino;

    if (id !== undefined) {
      const inquilinoModificado: InquilinoResponse = { ...this.formGroup.value };
      this.apiService.editInquilino(id, inquilinoModificado).subscribe(
        response => {
          this.snackbarService.openSnackBar(`Inquilino nro. ${id} editado correctamente!`, 'Cerrar', 3000);
          location.reload();
        },
        Error => {
          this.snackbarService.openSnackBar('Error al editar el inquilino', 'Cerrar', 3000);
        }
      );
    } else {
      console.error('No se pudo obtener el ID del inquilino original');
    }
  }

  llenarData() {
    this.apiService.getAllTenants().subscribe(data => {
      this.data = data.map((persona: InquilinoResponse, index: number) => ({
        id_inquilino: persona.id_inquilino,
        nombre: persona.nombre,
        apellido: persona.apellido,
        dni: persona.dni,
        fecha_alta: this.formatoFecha(persona.fecha_alta)
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





