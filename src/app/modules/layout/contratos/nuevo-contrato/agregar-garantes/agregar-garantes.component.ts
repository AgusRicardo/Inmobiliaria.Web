import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { NuevoGarante } from '../../../../models/garantes.response';

@Component({
  selector: 'app-agregar-garantes',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatButtonModule],
  templateUrl: './agregar-garantes.component.html',
  styleUrl: './agregar-garantes.component.css'
})
export class AgregarGarantesComponent {
  @Output() nextStep = new EventEmitter<void>();
  NewGaranteRespondes: NuevoGarante[] = [];
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.fourthFormGroup = this._formBuilder.group({
      nombreCtrl: ['', Validators.required],
      apellidoCtrl: ['', Validators.required],
      dniCtrl: ['', Validators.required],
      garantiaCtrl: ['', Validators.required]
    });
  }

  onNextStep() {
    console.log('Form Values:', this.fourthFormGroup.value);
    this.nextStep.emit();
  }
}
