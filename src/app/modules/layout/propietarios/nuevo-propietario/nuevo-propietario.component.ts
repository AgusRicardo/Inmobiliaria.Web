import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../../../service/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NuevoPropietarioResponse } from '../../../models/nuevo-propietario.response';
import { SnackbarService } from '../../../assets/snackbar.service';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-nuevo-propietario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, FormsModule, MatCardModule],
  templateUrl: './nuevo-propietario.component.html',
  styleUrl: './nuevo-propietario.component.css'
})
export class NuevoPropietarioComponent {

  nuevoPropietario: NuevoPropietarioResponse = {
    nombre: '',
    apellido: '',
    dni: '',
  };

  constructor(private apiService: ApiService, private router: Router, private snackbarService: SnackbarService) {}

  async guardarPropietario() {
    if (!this.nuevoPropietario.nombre || !this.nuevoPropietario.apellido || !this.nuevoPropietario.dni) {
      this.snackbarService.openSnackBar('Todos los campos son obligatorios', 'Cerrar', 3000);
      return;
    }

    this.apiService.createPropietario(this.nuevoPropietario)
      .subscribe(
        (response) => {
          if (response) {
            this.router.navigate(['/propietarios']);
            this.snackbarService.openSnackBar('Propietario guardado!', 'Cerrar', 3000);
          } else {
            this.snackbarService.openSnackBar('Error al guardar el propietario', 'Cerrar', 3000);
          }
        },
        (error) => {
          this.snackbarService.openSnackBar('Error al guardar el propietario', 'Cerrar', 3000);
        }
      );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
