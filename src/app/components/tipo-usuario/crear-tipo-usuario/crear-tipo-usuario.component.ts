import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoUsuario } from 'src/app/Models/TipoUsuario';
import { TipoUsuarioService } from 'src/app/Services/tipoUsuario/tipo-usuario.service';

@Component({
  selector: 'app-crear-tipo-usuario',
  templateUrl: './crear-tipo-usuario.component.html',
  styleUrls: ['./crear-tipo-usuario.component.css']
})
export class CrearTipoUsuarioComponent implements OnInit {
  descripcion!:string;
  private tipoUsuario!:TipoUsuario;
  constructor(private _tipoUsuarioService:TipoUsuarioService,private router: Router,private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['tipousuario']);
  }

  create() 
  {  
    debugger;
    this.tipoUsuario = {Id:1,Descripcion:this.descripcion,Estado:1};    
       console.log(this.tipoUsuario)
   debugger;
    this._tipoUsuarioService.create(this.tipoUsuario)
      .subscribe((res: any) => {
        this.toastr.success(res.message, 'Tipo Usuario');  
     
          this.router.navigate(['tipousuario']).then(() => {
            
          });       
      });
  }
}
