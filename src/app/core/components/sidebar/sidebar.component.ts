import { Component, Input, OnInit } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config-layout.interface';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  value: boolean | undefined;
  @Input()
  valueMobile: boolean | undefined;

  addclass: any;

  isCollapsedEmitted = '';
  config!: ConfigLayout;
  ngOnInit(): void {}
}
