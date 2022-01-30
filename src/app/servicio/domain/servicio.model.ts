import { TipoServicioModel } from 'src/app/tipo-servicio/domain/tipo-servicio.model';

export interface ServicioModel {
  id: number;
  nombre: string;
  tipoServicio: TipoServicioModel;
  createdAt: Date;
  updatedAt: Date;
}
