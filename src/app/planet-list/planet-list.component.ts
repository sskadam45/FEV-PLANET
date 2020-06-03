import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  Planets: Planet[];
  isFev: boolean = false;
  fevPlanets: Planet[] = [];
  fevList: Planet[];
  constructor(private planet: PlanetService) { }

  ngOnInit(): void {
    this.planet.getPlanets().subscribe({
      next: resp => {
        console.log(resp);
        this.Planets = resp;
        this.fevList = this.planet.getFevPlanets();
        this.fevList.forEach(el => {
          this.Planets.map(data => {
            if (el.name === data.name)
              data.isFavourite = el.isFavourite
          })
        });
      }, error: err => {
        console.log(err);
      }
    })


  }
  addToFev(fev: Planet) {
    fev.isFavourite = !fev.isFavourite;
    
    // if (fev.isFavourite) {
    //   this.fevPlanets = this.fevList;
    //   this.fevPlanets.push(fev);
    // }
    // this.fevPlanets = this.fevPlanets.filter(val => val.isFavourite === true);
    // console.log(this.fevPlanets);
    this.planet.addTofevPlanet(this.Planets);

  }

}
