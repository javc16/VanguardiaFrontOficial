import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/Models/Servicio';
import { ServicioService } from 'src/app/Services/Servicio/servicio.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  servicios: Servicio[] = [];
  displayedColumns: string[] = ['id', 'nombre','descripcion', 'alias', 'precio', 'estado', 'action'];

  constructor(private _servicio:ServicioService,private router: Router) { }

  ngOnInit(): void {
    this._servicio.getData().subscribe((data:any[])=>{
      this.servicios=data;
      console.log(this.servicios);
    })
  }

  create(){
    this.router.navigate(['createservicio']);
  }


  delete(servicio:Servicio){
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this._servicio.delete(servicio).subscribe(data =>{
        this._servicio.getData().subscribe((data:any[])=>{
          this.servicios=data;
          console.log(this.servicios);
        })
      })
  }
}
}
