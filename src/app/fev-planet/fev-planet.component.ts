import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-fev-planet',
  templateUrl: './fev-planet.component.html',
  styleUrls: ['./fev-planet.component.css']
})
export class FevPlanetComponent implements OnInit {
fevPlanets:Planet[]=[];
fevPlanets2:Planet[]=[];
  constructor(private planet:PlanetService) { }

  ngOnInit(): void {
    this.fevPlanets=this.planet.getFevPlanets();
   //this.fevPlanets2 = 
  }

}
