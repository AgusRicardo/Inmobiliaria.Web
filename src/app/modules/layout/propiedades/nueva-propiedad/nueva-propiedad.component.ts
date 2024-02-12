import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ApiService } from '../../../../service/api.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../assets/snackbar.service';
import { NuevaPropiedadResponse } from '../../../models/nueva-propiedad.response';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nueva-propiedad',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, FormsModule, MatCardModule, CommonModule, MatSelect, MatAutocompleteModule],
  templateUrl: './nueva-propiedad.component.html',
  styleUrl: './nueva-propiedad.component.css'
})
export class NuevaPropiedadComponent {
  inputSearch: string = '';
  propietariosEncontrados: any[] = [];
  nuevaPropiedad: NuevaPropiedadResponse = {
    id_propietario: null,
    tipo: '',
    direccion: '',
  };

  onInputChange(event: Event): void {
    const inputSearch = (event.target as HTMLInputElement).value;
    if (inputSearch.length >= 3) {
      this.apiService.searchPropietario(inputSearch).subscribe(
        (response) => {
          this.propietariosEncontrados = response;
        },
        (error) => {
          console.error('Error al buscar propietarios:', error);
        }
      );
    }
  }

  onPropietarioSelected(propietario: any): void {
    this.nuevaPropiedad.id_propietario = propietario;
  }

  constructor(private apiService: ApiService, private router: Router, private snackbarService: SnackbarService, private location: Location) {}

  goBack() {
    this.location.back();
  }

  async guardarPropiedad() {
    if (!this.nuevaPropiedad.id_propietario || !this.nuevaPropiedad.tipo || !this.nuevaPropiedad.direccion) {
      this.snackbarService.openSnackBar('Todos los campos son obligatorios', 'Cerrar', 3000);
      return;
    }

    this.apiService.createPropiedad(this.nuevaPropiedad)
      .subscribe(
        (response) => {
          if (response) {
            this.router.navigate(['/propiedades']);
            this.snackbarService.openSnackBar('Propiedad guardada!', 'Cerrar', 3000);
          } else {
            this.snackbarService.openSnackBar('Error al guardar la propiedad', 'Cerrar', 3000);
          }
        },
        (error) => {
          console.error('Error al guardar la propiedad:', error);
          this.snackbarService.openSnackBar('Error al guardar la propiedad', 'Cerrar', 3000);
        }
      );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
