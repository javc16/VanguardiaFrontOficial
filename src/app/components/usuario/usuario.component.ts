
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  id!:number;
  usuarios:Usuario [] = [];
  displayedColumns: string[] = ['Id',
                                'Nombre',
                                'Apellido',
                                'Email',
                                'Telefono',
                                'Estado',
                                'action'];


  constructor(private _usuarioService:UsuarioService,private router: Router) {}

  ngOnInit(): void {
    this._usuarioService.getData().subscribe((data:any[])=>{
      this.usuarios=data;
      console.log(this.usuarios);
    })
  }

  eliminar(usuarios:Usuario){
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this._usuarioService.deleteUsuario(usuarios).subscribe(data =>{
        this._usuarioService.getData().subscribe((data:any[])=>{
          this.usuarios=data;
          console.log(this.usuarios);
        })
      })
  }
}

  agregar(){
    this.router.navigate(['agregarusuario']);
  }
}
