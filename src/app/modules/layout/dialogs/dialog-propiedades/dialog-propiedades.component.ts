import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DialogWithTemplateDataInquilino, DialogWithTemplateDataPropiedad } from '../../../models/dialog-custom-data';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-propiedades',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormField, MatLabel, MatButton, CommonModule],
  templateUrl: './dialog-propiedades.component.html',
  styleUrl: './dialog-propiedades.component.css'
})
export class DialogPropiedadesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogWithTemplateDataPropiedad) {}
}
