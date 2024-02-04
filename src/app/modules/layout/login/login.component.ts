import { Component, inject } from '@angular/core';
import {FormControl,FormGroupDirective,FormGroup,NgForm,Validators,FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;
  isLoading: boolean = false;
  usersService = inject(ApiService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  matcher = new MyErrorStateMatcher();

  async onSubmit() {
    try {
      if (this.formulario.valid) {
        this.isLoading = true;
        const response = await this.usersService.login(this.formulario.value);
        if (!response.error) {
          localStorage.setItem('token', response.result);
          this.router.navigate(['/inicio']);
        } else {
          console.error('Error de inicio de sesión:', response.error);
        }
      } else {
        console.error('Formulario no válido');
      }
    } catch (error) {
      console.error('Error inesperado durante el inicio de sesión:', error);
    }
  }
}
