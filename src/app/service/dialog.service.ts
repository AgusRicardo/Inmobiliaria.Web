import { Injectable, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogWithTemplateComponent } from "../modules/layout/dialogs/dialog-with-template/dialog-with-template.component";
import { InquilinoResponse } from "../modules/models/inquilino.response";
import { DialogPropiedadesComponent } from "../modules/layout/dialogs/dialog-propiedades/dialog-propiedades.component";
import { DialogInquilinosComponent } from '../modules/layout/dialogs/dialog-inquilinos/dialog-inquilinos.component';
import { Propietario } from "../modules/models/propietario.response";
import { Propiedad } from "../modules/models/propiedades.response";
import { Contrato } from "../modules/models/contratos.response";

@Injectable({
  providedIn: 'root'
})

export class DialogService {
  constructor(private matDialog: MatDialog) {}

  openDialogWithTemplate(propietario: Propietario, template: TemplateRef<any>) {
    return this.matDialog.open(DialogWithTemplateComponent, {data: { propietario, template }});
  }
  openDialogPropiedad(propiedad: Propiedad, template: TemplateRef<any>) {
    return this.matDialog.open(DialogPropiedadesComponent, {data: { propiedad, template }});
  }
  openDialogInquilino(inquilino: InquilinoResponse, template: TemplateRef<any>) {
    return this.matDialog.open(DialogInquilinosComponent, {data: { inquilino, template }});
  }
  openDialogContrato(contrato: Contrato, template: TemplateRef<any>) {
    return this.matDialog.open(DialogWithTemplateComponent, {data: { contrato, template }});
  }
}
