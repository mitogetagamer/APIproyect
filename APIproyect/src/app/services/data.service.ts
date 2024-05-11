import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  API_URL: string = "https://valorant-api.com/v1/agents";

  httpClient = inject(HttpClient);

  obtenerDatos(){
    return this.httpClient.get(this.API_URL);
  }
}
