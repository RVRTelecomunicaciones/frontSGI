import { TipoServicioModel } from 'src/app/tipo-servicio/domain/tipo-servicio.model';

export interface ServicioResponse {
  data: Datos[];
  paginacion: Paginacion;
}
export interface Datos {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  nombre: string;
  tipoServicio: TipoServicioModel;
}

export interface Paginacion {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
