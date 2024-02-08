import { Estado } from "./estado.response";
import { InquilinoResponse } from "./inquilino.response";
import { Propiedad } from "./propiedades.response";
import { Propietario } from "./propietario.response";

export interface Contrato {
  id_contrato: number;
  propietario: Propietario;
  propiedad: Propiedad;
  inquilino: InquilinoResponse;
  fecha_inicio: string;
  fecha_fin: string;
  monto: number;
  fecha_alta: string;
  estado: Estado;
}
