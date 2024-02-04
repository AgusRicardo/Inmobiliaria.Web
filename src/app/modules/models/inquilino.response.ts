export class InquilinoResponse {
  id_inquilino!: number;
  nombre!: string;
  apellido!: string;
  dni!: string;
  fecha_alta!: string;
}

export interface NewInquilinoResponde {
  nombre: string;
  apellido: string;
  dni: string;
}
