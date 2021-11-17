import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from '../models/alert';
import { AlertService } from '../services/alert.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private notification: NzNotificationService
  ) {}

  afterClose() {}
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
  }
}
