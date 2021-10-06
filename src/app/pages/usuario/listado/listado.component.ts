import { Component, OnInit } from '@angular/core';

interface Usuario {
  id: number;
  name: string;
  email: string;
  area: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: Usuario[] = [
    {
      id: 1,
      name: 'MONGE ALEJANDRO',
      email: 'apamonge@gmail.com',
      area: '',
    },
    {
      id: 2,
      name: 'SCHERADER RIOS ALEX',
      email: 'apscherader@gmail.com',
      area: '',
    },
    {
      id: 3,
      name: 'ALLEMANT ALFREDO',
      email: 'apallemant@gmail.com',
      area: 'GERENCIA',
    },
    {
      id: 4,
      name: 'CASTILLO ALVARO',
      email: 'apacastillo@gmail.com',
      area: '',
    },
    {
      id: 5,
      name: 'ALTAMIRANO ANDY',
      email: 'apaltamirano@gmail.com',
      area: '',
    },
    {
      id: 6,
      name: 'CHAVEZ ALAVARADO ANGEL',
      email: 'apachavez@gmail.com',
      area: '',
    },
    {
      id: 7,
      name: 'COHEN FLORES ANGEL',
      email: 'apacohen@gmail.com',
      area: '',
    },
    {
      id: 8,
      name: 'GARCIA ESTRADA ANGEL',
      email: 'apagarcia@gmail.com',
      area: '',
    },
    {
      id: 9,
      name: 'CALDERON PAUCAR ANGELA',
      email: 'apacalderon@gmail.com',
      area: '',
    },
    {
      id: 10,
      name: 'VIVAR CARLA',
      email: 'apcvivar@gmail.com',
      area: '',
    },
    {
      id: 11,
      name: 'ALFONSO CARLOS',
      email: 'apcalfonso@gmail.com',
      area: '',
    },
    {
      id: 12,
      name: 'CONTRERAS CARLOS',
      email: 'apacontreras@gmail.com',
      area: '',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor() {}

  ngOnInit(): void {}

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: Usuario) => item.name.indexOf(this.searchValue) !== -1
    );
  }
}
