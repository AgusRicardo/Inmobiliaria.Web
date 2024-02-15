import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { GenerarContrato } from '../../../../models/contratos.response';

@Component({
  selector: 'app-generar-contrato',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatButtonModule],
  templateUrl: './generar-contrato.component.html',
  styleUrl: './generar-contrato.component.css'
})
export class GenerarContratoComponent {
  GenerarContrato: GenerarContrato[] = [];
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.fifthFormGroup = this._formBuilder.group({
      fiveCtrl: ['', Validators.required],
      sixCtrl: ['', Validators.required],
      sevenCtrl: ['', Validators.required],
    });
  }
}
