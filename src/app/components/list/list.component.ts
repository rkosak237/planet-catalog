import { Component, OnInit } from '@angular/core';
import { Planets } from '../models/Planets';
import { PlanetService } from '../../services/planet.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  planets: Planets[];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(data => {
        this.planets = data.results;
    });
  }
}
