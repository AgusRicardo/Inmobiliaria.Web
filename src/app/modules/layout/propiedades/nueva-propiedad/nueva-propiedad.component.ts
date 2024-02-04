import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from '../../../../service/api.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../assets/snackbar.service';
import { NuevaPropiedadResponse } from '../../../models/nueva-propiedad.response';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-nueva-propiedad',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, FormsModule, MatCardModule],
  templateUrl: './nueva-propiedad.component.html',
  styleUrl: './nueva-propiedad.component.css'
})
export class NuevaPropiedadComponent {

  nuevaPropiedad: NuevaPropiedadResponse = {
    id_propietario: 0,
    tipo: '',
    direccion: '',
  };

  constructor(private apiService: ApiService, private router: Router, private snackbarService: SnackbarService) {}

  async guardarPropiedad() {
    console.log('guardarPropietario', this.nuevaPropiedad);

    // if (!this.nuevoPropietario.nombre || !this.nuevoPropietario.apellido || !this.nuevoPropietario.dni) {
    //   this.snackbarService.openSnackBar('Todos los campos son obligatorios', 'Cerrar', 3000);
    //   return;
    // }

    // this.apiService.createPropietario(this.nuevoPropietario)
    //   .subscribe(
    //     (response) => {
    //       if (response) {
    //         this.router.navigate(['/propietarios']);
    //         this.snackbarService.openSnackBar('Propietario guardado!', 'Cerrar', 3000);
    //       } else {
    //         this.snackbarService.openSnackBar('Error al guardar el propietario', 'Cerrar', 3000);
    //       }
    //     },
    //     (error) => {
    //       console.error('Error al guardar el propietario:', error);
    //       this.snackbarService.openSnackBar('Error al guardar el propietario', 'Cerrar', 3000);
    //     }
    //   );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
