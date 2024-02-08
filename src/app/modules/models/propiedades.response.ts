import { Propietario } from "./propietario.response";

export interface Propiedad {
  id_propiedad: number;
  propietario: Propietario;
  tipo: string;
  direccion: string;
  fecha_alta: string;
}
