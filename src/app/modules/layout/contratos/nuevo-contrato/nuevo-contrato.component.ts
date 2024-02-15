import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PropietariosSearchComponent } from '../../propietarios/propietarios-search/propietarios-search.component';
import { AgregarGarantesComponent } from './agregar-garantes/agregar-garantes.component';
import { AgregarInquilinoComponent } from './agregar-inquilino/agregar-inquilino.component';
import { GenerarContratoComponent } from './generar-contrato/generar-contrato.component';
import { SeleccionarPropiedadComponent } from './seleccionar-propiedad/seleccionar-propiedad.component';
import { Location } from '@angular/common';
import { CdkStep, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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
    SeleccionarPropiedadComponent,
    MatButtonModule
  ],
  templateUrl: './nuevo-contrato.component.html',
  styleUrl: './nuevo-contrato.component.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false  }
    }
  ]
})
export class NuevoContratoComponent {
  showSearchComponent: boolean = false;
  searchTermControl: FormGroup;
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder, private location: Location) {
    this.searchTermControl = this._formBuilder.group({
      searchTerm: [''],
    });
  }

  ngAfterViewInit() {
    this.stepper.next();
  }

  logNextStepEvent(stepper: MatStepper) {
    if (this.stepper.selected) {
      this.stepper.selected.completed = true;
    }
    this.stepper.next();
  }

  goBack() {
    this.location.back();
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
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fiveCtrl: ['', Validators.required],
    sixCtrl: ['', Validators.required],
    sevenCtrl: ['', Validators.required],
  });
  isLinear = true;

  printFormValues(stepNumber: number) {
    let stepFormGroup: FormGroup | null = null;
    switch (stepNumber) {
      case 1:
        stepFormGroup = this.firstFormGroup;
        break;
      case 2:
        stepFormGroup = this.secondFormGroup;
        break;
      case 3:
        stepFormGroup = this.thirdFormGroup;
        break;
      default:
        break;
    }
    if (stepFormGroup !== null) {
      const formValues: { [key: string]: any } = {};
      Object.keys(stepFormGroup.controls).forEach(controlName => {
        formValues[controlName] = stepFormGroup?.controls[controlName].value;
      });
      console.log('Step', stepNumber, 'Form Values:', formValues);
    }
  }

  goForward(stepper: MatStepper, stepNumber: number) {
    this.printFormValues(stepNumber);
    stepper.next();
  }
}

