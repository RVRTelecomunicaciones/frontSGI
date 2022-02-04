export interface TipoDocumentoModel {
  id?: number;
  codigo: string;
  nombre: string;
  abreviatura: string;
  longitud: number;
  createdAt?: Date;
  updatedAt?: Date;
}
