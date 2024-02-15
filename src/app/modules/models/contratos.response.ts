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
export interface GenerarContrato {
  fecha_inicio: string;
  fecha_fin: string;
  monto: number;
}
export interface NuevoContrato {
  id_propietario: number;
  id_propiedad: number;
  id_inquilino: number;
  id_garante: number;
  fecha_inicio: string;
  fecha_fin: string;
  monto: number;
  id_estado: number;
}

