import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from 'src/app/Models/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url:string;

  constructor(private http: HttpClient) {
    this.url =  "http://38.17.54.162:8083/api/servicio";
   }

   getData(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.url);
  }

  create(servicio: Servicio) {
    return this.http.post(this.url, servicio);
  }

  delete(servicio: Servicio){
    debugger;    
    return this.http.put(this.url, servicio);
  }
}
