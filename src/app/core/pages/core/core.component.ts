import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  isCollapsed = false;

  ngOnInit(): void {}

  navLinks = [
    { path: 'General', label: 'General' },
    { path: 'Involucrados', label: 'Involucrado' },
    { path: 'Servicios', label: 'Servicios' },
    { path: 'Costos', label: 'Costos' },
  ];

  constructor(private router: Router) {
    this.navLinks = this.buildNavItems(this.router.config);
  }

  buildNavItems(routes: Routes) {
    return routes
      .filter((route) => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data!.label,
        icon: data!.icon,
      }));
  }
}
