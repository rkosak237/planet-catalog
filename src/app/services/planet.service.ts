import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from '../components/models/Planets';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class PlanetService {

  planetsUrl: string = "https://swapi.co/api/planets/";
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planets[]> {
    return this.http.get<Planets[]>(this.planetsUrl);
  }
}
