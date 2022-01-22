import { Component, OnInit } from '@angular/core';
import { AreaRepository } from '../../application/area.repository';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css'],
})
export class AreaListComponent implements OnInit {
  constructor(private readonly areaRepository: AreaRepository) {
    console.log(this.areaRepository.listAreas());
  }

  ngOnInit(): void {}
}
