import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { DialogWithTemplateDataInquilino } from '../../../models/dialog-custom-data';

@Component({
  selector: 'app-dialog-inquilinos',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormField, MatLabel, MatButton, CommonModule],
  templateUrl: './dialog-inquilinos.component.html',
  styleUrl: './dialog-inquilinos.component.css'
})
export class DialogInquilinosComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogWithTemplateDataInquilino) {}
}
