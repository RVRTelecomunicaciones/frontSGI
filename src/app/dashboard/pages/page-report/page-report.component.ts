import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-report',
  templateUrl: './page-report.component.html',
  styleUrls: ['./page-report.component.css'],
})
export class PageReportComponent implements OnInit {
  isCollapsed = false;

  constructor() {
    console.log('SOY EL DASHBOARD');
  }

  ngOnInit(): void {}
}
