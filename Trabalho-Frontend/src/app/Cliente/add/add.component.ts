import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente:Cliente=new Cliente();
  constructor(private router:Router, private service:ServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createCliente(this.cliente)
      .subscribe(data=>{
        this._snackBar.open('Cliente Cadastrado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(["listar"]);
      })
  }

}
