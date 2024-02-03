import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PropietariosSearchComponent } from '../../propietarios/propietarios-search/propietarios-search.component';
import { AgregarGarantesComponent } from './agregar-garantes/agregar-garantes.component';
import { AgregarInquilinoComponent } from './agregar-inquilino/agregar-inquilino.component';
import { GenerarContratoComponent } from './generar-contrato/generar-contrato.component';
import { SeleccionarPropiedadComponent } from './seleccionar-propiedad/seleccionar-propiedad.component';



@Component({
  selector: 'app-nuevo-contrato',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    PropietariosSearchComponent,
    AgregarGarantesComponent,
    AgregarInquilinoComponent,
    GenerarContratoComponent,
    SeleccionarPropiedadComponent
  ],
  templateUrl: './nuevo-contrato.component.html',
  styleUrl: './nuevo-contrato.component.css'
})
export class NuevoContratoComponent {
  showSearchComponent: boolean = false;
  searchTermControl: FormGroup;
  @ViewChild('stepper') stepper: any;

  constructor(private _formBuilder: FormBuilder) {
    this.searchTermControl = this._formBuilder.group({
      searchTerm: [''],
    });
  }

  onFormSubmit(): void {
    this.showSearchComponent = true;
    console.log(this.searchTermControl.value);
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  roomFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}

