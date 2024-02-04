import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewInquilinoResponde } from '../../../models/inquilino.response';
import { SnackbarService } from '../../../assets/snackbar.service';


@Component({
  selector: 'app-nuevo-inquilino',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, FormsModule, MatCardModule],
  templateUrl: './nuevo-inquilino.component.html',
  styleUrl: './nuevo-inquilino.component.css'
})

export class NuevoInquilinoComponent {
  nuevoInquilino: NewInquilinoResponde = {
    nombre: '',
    apellido: '',
    dni: ''
  }

  constructor(private apiService: ApiService, private router: Router, private snackbarService: SnackbarService) {}

  async guardarInquilino() {
    if (!this.nuevoInquilino.nombre || !this.nuevoInquilino.apellido || !this.nuevoInquilino.dni) {
      this.snackbarService.openSnackBar('Todos los campos son obligatorios', 'Cerrar', 3000);
      return;
    }
    this.apiService.createInquilino(this.nuevoInquilino)
      .subscribe(
        (response) => {
          if (response) {
            this.router.navigate(['/inquilinos']);
            this.snackbarService.openSnackBar('Inquilino guardado!', 'Cerrar', 3000);
          } else {
            this.snackbarService.openSnackBar('Error al guardar el inquilino', 'Cerrar', 3000);
          }
        },
        (error) => {
          console.error('Error al guardar el inquilino:', error);
          this.snackbarService.openSnackBar('Error al guardar el inquilino', 'Cerrar', 3000);
        }
      );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
