import { TipoDocumentoModel } from 'src/app/tipo-documento/domain/tipo-documento.model';

export interface InvolucradoNaturalModel {
  id: number;
  paterno: string;
  materno: string;
  nombre: string;
  tipoDocumento: TipoDocumentoModel;
  nro_documento: string;
  telefono: string;
  celular1: string;
  celular2: string;
  direccion: string;
  correo: string;
  createdAt: Date;
  updatedAt: Date;
}
