import { Component, OnInit } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config-layout.interface';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  config!: ConfigLayout;
  ngOnInit(): void {}
}
