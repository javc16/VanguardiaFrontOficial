import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import {Router} from '@angular/router'
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-vistaprincipal',
  templateUrl: './vistaprincipal.component.html',
  styleUrls: ['./vistaprincipal.component.scss']
})
export class VistaprincipalComponent implements OnInit {

  @HostBinding('class') classes='row';
  vista: any=[];

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(){
    this.proveedorService.getData().subscribe(
      resp => {
        this.vista = resp;
      },
      err => console.log(err)
    );
  }
}
