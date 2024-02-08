import { TemplateRef } from "@angular/core";
import { InquilinoResponse } from "./inquilino.response";
import { Propietario } from "./propietario.response";
import { Propiedad } from "./propiedades.response";

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
