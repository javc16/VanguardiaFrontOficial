import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoServicio } from 'src/app/Models/TipoServicio';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  private url:string;

  constructor(private http: HttpClient) { 
    this.url =  "http://38.17.54.162:8083/api/tipousuario";
  }

  getData(): Observable<TipoServicio[]> {
    debugger;
    return this.http.get<TipoServicio[]>(this.url);
  }

  create(tipoServicio: TipoServicio) {
    return this.http.post(this.url, tipoServicio);
  }

  delete(tipoServicio: TipoServicio){
    debugger;    
    return this.http.put(this.url, tipoServicio);
  }

}
