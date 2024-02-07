import { TemplateRef } from "@angular/core";
import { Propietario } from "../layout/propietarios/propietarios.component";
import { Propiedad } from "../layout/propiedades/propiedades.component";
import { InquilinoResponse } from "./inquilino.response";

export interface DialogWithTemplateData {
  template: TemplateRef<any>;
}
export interface DialogWithTemplateDataPropietario {
  propietario: Propietario;
  template: TemplateRef<any>;
}
export interface DialogWithTemplateDataPropiedad {
  propiedad: Propiedad;
  template: TemplateRef<any>;
}
export interface DialogWithTemplateDataInquilino {
  inquilino: InquilinoResponse;
  template: TemplateRef<any>;
}
