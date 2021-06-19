import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/Models/Servicio';
import { ServicioService } from 'src/app/Services/Servicio/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {
  nombre!:string;
  descripcion!:string;
  alias!:string;
  precio!:number;
  estado!:number;

  private servicio!:Servicio;

  constructor(private _servicio:ServicioService,private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['servicio']);
  }

  create() 
  {  
    debugger;
    this.servicio = {Id:1,Nombre:this.nombre,Descripcion:this.descripcion,Alias:this.alias,Precio:this.precio,Estado:1};    
       console.log(this.servicio)
   debugger;
    this._servicio.create(this.servicio)
      .subscribe((res: any) => {     
          this.router.navigate(['servicio']).then(() => {
           
          });       
      });
  }
}
