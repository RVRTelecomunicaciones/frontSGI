import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AreaRepository } from '../application/area.repository';

export class AreaInfraestructure extends AreaRepository {
  constructor(private http: HttpClient) {
    super();
  }
  listAreas(): any {
    return this.http.get(`${environment.API_URL}/areas/list`);
  }
}
