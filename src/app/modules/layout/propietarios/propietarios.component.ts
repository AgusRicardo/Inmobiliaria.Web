import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from '../../../service/api.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogService } from '../../../service/dialog.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { SnackbarService } from '../../assets/snackbar.service';
import { Propietario } from '../../models/propietario.response';
import { TokenDecoderStorageService } from '../../../service/token-decoder-storage.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-propietarios',
  standalone: true,
  imports: [MatCardModule, MatDialogActions,MatDialogContent,ReactiveFormsModule, MatDialogTitle,MatDialogClose, MatDialogContent,MatDialogActions, MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './propietarios.component.html',
  styleUrl: './propietarios.component.css'
})
export class PropietariosComponent {
  propietarioOriginal: Propietario | null = null;
  formGroup: FormGroup;
  displayedColumns: string[] = ['nro', 'nombre', 'apellido', 'dni', 'fecha_alta', 'acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<Propietario>([]);
  isLoading: boolean = true;
  noData = false;

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private apiService: ApiService, private router: Router, private dialogService: DialogService, private fb: FormBuilder, private snackbarService: SnackbarService, private tokenStorageService: TokenDecoderStorageService) {
    this.formGroup = this.fb.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
    });
  }

  openDialogCustom(propietario: Propietario, template: TemplateRef<any>) {
    this.propietarioOriginal = propietario;
    this.formGroup.patchValue(propietario);
    this.dialogService.openDialogWithTemplate( propietario, template );
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.llenarData();
  }

  onSave() {
    this.formGroup.patchValue({
      id_propietario: this.propietarioOriginal?.id_propietario,
    });
    const propietarioModificado: Propietario = this.formGroup.value;
    const id = this.propietarioOriginal?.id_propietario;
    if (id !== undefined) {
      const propietarioModificado: Propietario = { ...this.formGroup.value };
      this.apiService.editPropietario(id, propietarioModificado).subscribe(
        response => {
          this.snackbarService.openSnackBar(`Propietario nro. ${id} editado correctamente!`, 'Cerrar', 3000);
          location.reload();
        },
        Error => {
          this.snackbarService.openSnackBar('Error al editar el propietario', 'Cerrar', 3000);
        }
      );
    } else {
      console.error('No se pudo obtener el ID del propietario original');
    }
  }

  llenarData() {
    this.apiService.getAllOwner().subscribe(
      data => {
        this.data = data.map((propietario: Propietario, index: number) => ({
          id_propietario: propietario.id_propietario,
          nombre: propietario.nombre,
          apellido: propietario.apellido,
          dni: propietario.dni,
          fecha_alta: this.formatoFecha(propietario.fecha_alta)
        }));
        this.dataSource.data = this.data;
        this.isLoading = false;
      },
      error => {
        this.noData = true;
        this.isLoading = false;
      }
    );
  }

  formatoFecha(fecha: string): string {
    const partesFecha = fecha.split('-');
    const fechaFormateada = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;
    return fechaFormateada;
  }
}
