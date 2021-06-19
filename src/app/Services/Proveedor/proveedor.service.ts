import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/Models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url:string;
  private urlPut: string;

  constructor(private http: HttpClient)

  {

    this.url =  "http://38.17.54.162:8083/api/proveedor";
    this.urlPut = "http://38.17.54.162:8083/api/proveedor/id";

  }

  getData(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  getDataId(id: number){
    return this.http.get(`${this.url}/proveedor/${id}`);
  }

  create(proveedor:Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  updateProveedor(id: number, updateProveedor:Proveedor): Observable<Proveedor>{
    return this.http.put(`${this.url}/proveedor/${id}`, updateProveedor);
  }

  deleteProveedor(proveedor:Proveedor){
    return this.http.put(`${this.url}/delete`, proveedor);
  }
}
