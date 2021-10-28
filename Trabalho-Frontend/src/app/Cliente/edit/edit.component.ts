import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente :Cliente=new Cliente();
  constructor(private router:Router,private service:ServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    // @ts-ignore
    this.service.getClienteId(+id)
      .subscribe(data=>{
        this.cliente=data;
      })

  }
  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
      .subscribe(data=>{
        this.cliente=data;
        this._snackBar.open('Cliente Editado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        this.router.navigate(["listar"]);

      })
  }

}
