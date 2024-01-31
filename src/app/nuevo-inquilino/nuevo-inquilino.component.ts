import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl,FormGroupDirective,FormGroup,NgForm,Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-nuevo-inquilino',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nuevo-inquilino.component.html',
  styleUrl: './nuevo-inquilino.component.css'
})

export class NuevoInquilinoComponent {
  formulario: FormGroup;
  usersService = inject(ApiService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl()
    });
  }

  async onSubmit() {
    this.formulario.value.dni = this.formulario.value.dni.toString();
    const user = await this.usersService.createPerson(this.formulario.value);
    this.router.navigate(['/inquilinos']);
    console.log(user);

  }
}
