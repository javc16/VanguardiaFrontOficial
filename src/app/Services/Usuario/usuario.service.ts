import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string;
  private urlPut: string;

  constructor(private http: HttpClient)

  {

    this.url =  "http://38.17.54.162:8083/api/usuario";
    this.urlPut = "http://38.17.54.162:8083/api/usuario/id";

  }

  getData(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  getDataId(id: number){
    return this.http.get(`${this.url}/usuario/${id}`);
  }

  create(Usuario:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, Usuario);
  }

  updateUsuario(id: number, updateUsuario:Usuario): Observable<Usuario>{
    return this.http.put(`${this.url}/Usuario/${id}`, updateUsuario);
  }

  deleteUsuario(Usuario:Usuario){
    return this.http.put(`${this.url}/delete`, Usuario);
  }
}
