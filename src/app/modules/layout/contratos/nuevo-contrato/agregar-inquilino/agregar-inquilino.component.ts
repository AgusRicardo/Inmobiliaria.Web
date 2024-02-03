import { Component, Input, OnInit } from '@angular/core';
import { NewInquilinoResponde } from '../../../../models/inquilino.response';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-agregar-inquilino',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatButtonModule],
  templateUrl: './agregar-inquilino.component.html',
  styleUrls: ['./agregar-inquilino.component.css']
})
export class AgregarInquilinoComponent{
  NewInquilinoRespondes: NewInquilinoResponde[] = [];
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.thirdFormGroup = this._formBuilder.group({
      nombreCtrl: ['', Validators.required],
      apellidoCtrl: ['', Validators.required],
      dniCtrl: ['', Validators.required],
    });
  }
}
