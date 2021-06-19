import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/Services/usuario/usuario.service';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  nombre!:string;
  apellido!:string;
  email!:string;
  telefono!:string;
  estado!:number;

  private usuario!:Usuario;

  constructor(private _usuarioService:UsuarioService, private router: Router){}


  ngOnInit(): void { }

  cancel() {
    this.router.navigate(['usuario']);
  }

  create() {

    debugger;
    this.usuario= {Id:1,Nombre:this.nombre,
                           Apellido:this.apellido,
                           Email:this.email,
                           Telefono:this.telefono,
                           Estado:this.estado};

       console.log(this.usuario)

      debugger;
        this._usuarioService.create(this.usuario)
          .subscribe((res: any) => {
          this.router.navigate(['usuario']).then(() => {
            
          });
      });
  }
}
