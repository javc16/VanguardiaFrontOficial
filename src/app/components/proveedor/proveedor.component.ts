import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  id!:number;
  proveedores:Proveedor [] = [];
  displayedColumns: string[] = ['Id',
                                'Nombre',
                                'Apellido',
                                'Email',
                                'Telefono',
                                'Empresa',
                                'Direccion',
                                'Estado',
                                'action'];


  constructor(private _proveedorService:ProveedorService,private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this._proveedorService.getData().subscribe((data:any[])=>{
      this.proveedores=data;
      console.log(this.proveedores);
    })
  }

  eliminar(proveedores:Proveedor){
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this._proveedorService.deleteProveedor(proveedores).subscribe((data:any) =>{
        this._proveedorService.getData().subscribe((data:any[])=>{
          this.proveedores=data;
          console.log(this.proveedores);
        })
        this.toastr.success(data.mensaje, 'Tipo Usuario'); 

      })
  }
}

  agregar(){
    this.router.navigate(['agregarproveedor']);
  }

}
