import { Component, OnInit } from '@angular/core';
import { TipoServicio } from 'src/app/Models/TipoServicio';
import { TipoServicioService } from 'src/app/Services/tipoServicio/tipo-servicio.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.component.html',
  styleUrls: ['./tipo-servicio.component.scss']
})
export class TipoServicioComponent implements OnInit {

  tipoServicios: TipoServicio[] = [];
  displayedColumns: string[] = ['id', 'descripcion','tipo', 'estado', 'action'];
  constructor(private _tipoServicioService:TipoServicioService,private router: Router) { }

  ngOnInit(): void {
    this._tipoServicioService.getData().subscribe((data:any[])=>{
      this.tipoServicios=data;
      console.log(this.tipoServicios);
    })
  }

  create(){
    this.router.navigate(['creartiposervicio']);
  }

  delete(tipoServicio:TipoServicio) {  
    this._tipoServicioService.delete(tipoServicio)
      .subscribe((res: any) => {
        this._tipoServicioService.getData().subscribe((res: any[])=>{
          this.tipoServicios= res;          
        })
        
      });     
  }
}
