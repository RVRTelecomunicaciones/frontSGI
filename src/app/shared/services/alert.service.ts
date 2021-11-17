import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../models/alert';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  constructor(private notification: NzNotificationService) {}
  //activa la subscripcion del alert al observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // tipo de metodos de alert
  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.success, message }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.error, message }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.info, message }));
  }

  /* warn(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.warning, message }));
  } */
  warn(message: string, options?: any) {
    this.createBasicNotification(
      new Alert({ ...options, type: AlertType.warning, message })
    );
  }

  // metodo alert
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
    this.subject.next(alert);
  }
  createBasicNotification(alert: Alert): void {
    this.notification.create(
      alert.type.toString(),
      alert.message,
      alert.message
    );
  }
}
