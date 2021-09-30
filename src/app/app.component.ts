import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;

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
