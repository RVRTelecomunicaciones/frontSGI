import { AreaModel } from 'src/app/area/domain/area.model';

export interface FormResult {
  position: AreaModel;
  crudType: string;
  status: boolean;
}
