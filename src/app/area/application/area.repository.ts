import { AreaModel } from '../domain/area.model';

export abstract class AreaRepository {
  abstract getByPageListAreas(page: number, page_size: number): any;
  abstract AddArea(data: AreaModel): any;
}
