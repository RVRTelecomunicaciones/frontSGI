import { ClasificacionInvolucradoModel } from 'src/app/clasificacion-involucrado/domain/clasificacion-involucrado.model';
import { SectorInvolucradoModel } from 'src/app/sector-involucrado/domain/sector-involucrado.model';
import { TipoDocumentoModel } from 'src/app/tipo-documento/domain/tipo-documento.model';

export interface InvolucradoJuridicoModel {
  id: number;
  razon_social: string;
  tipoDocumento: TipoDocumentoModel;
  nro_documento: string;
  telefono: string;
  /*celular1: string;
  celular2: string;*/
  direccion: string;
  correo: string;
  sector: SectorInvolucradoModel;
  clasificacion: ClasificacionInvolucradoModel;
  createdAt: Date;
  updatedAt: Date;
}
