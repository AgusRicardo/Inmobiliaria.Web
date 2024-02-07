import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DialogWithTemplateData, DialogWithTemplateDataPropietario } from '../../../models/dialog-custom-data';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-with-template',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormField, MatLabel, MatButton, CommonModule],
  templateUrl: './dialog-with-template.component.html',
  styleUrl: './dialog-with-template.component.css'
})
export class DialogWithTemplateComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogWithTemplateDataPropietario) {}
}
