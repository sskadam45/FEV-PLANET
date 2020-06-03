import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Planet } from './planet';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  URL: string = "https://assignment-machstatz.herokuapp.com/planet";
  fevPlanets:Planet[]=[];
  constructor(private http:HttpClient) { }
  
//to get planet list
  getPlanets():Observable<Planet[]>{
    return this.http.get<Planet[]>(this.URL);
  }

  addTofevPlanet(fev){
 this.fevPlanets = fev;
  }
  getFevPlanets(){
    return this.fevPlanets.filter(data=>{
      return data.isFavourite ===true;
    })
   // return list;
  }
}
