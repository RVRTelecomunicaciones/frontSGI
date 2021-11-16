import { Injectable } from '@angular/core';

export interface IMenu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Dashboard', url: '/dashboard', icon: 'tablero' },
    { title: 'Usuarios', url: '/usuario', icon: 'usuario' },
    { title: 'Áreas', url: '/area', icon: 'usuario' },
    { title: 'Roles', url: '/rol', icon: 'usuario' },
    { title: 'Roles x Área', url: '/rol-area', icon: 'usuario' },
    { title: 'Desglose', url: '/desglose', icon: 'usuario' },
    { title: 'Monedas', url: '/moneda', icon: 'usuario' },
    { title: 'Tipo de Servicios', url: '/tipo-servicio', icon: 'usuario' },
    { title: 'Servicios', url: '/servicio', icon: 'usuario' },
    { title: 'Requisitos', url: '/requisito', icon: 'usuario' },
    {
      title: 'Requisitos por Servicio',
      url: '/requisito-por-servicio',
      icon: 'usuario',
    },
    {
      title: 'Involucrados Naturales',
      url: '/involucrado-natural',
      icon: 'usuario',
    },
    {
      title: 'Involucrados Juridicos',
      url: '/involucrado-juridico',
      icon: 'usuario',
    },
    { title: 'Cotizaciones', url: '/cotizacion', icon: 'usuario' },
    { title: 'Coordinaciones', url: '/coordinacion', icon: 'usuario' },
    {
      title: 'Inspecciones',
      url: '/inspeccion',
      icon: 'usuario',
    },
    {
      title: 'Tasaciones por Registrar',
      url: '/tasaciones-registrar',
      icon: 'usuario',
    },
    {
      title: 'Lista de Tasaciones',
      url: '/tasaciones-registradas',
      icon: 'usuario',
    },
    {
      title: 'Reporte de Comercial',
      url: '/reporte-comercial',
      icon: 'usuario',
    },
    {
      title: 'Reporte de Operaciones',
      url: '/reporte-operaciones',
      icon: 'usuario',
    },
    {
      title: 'Reporte de Sistemas',
      url: '/reporte-sistemas',
      icon: 'usuario',
    },
  ];
  constructor() {}

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
