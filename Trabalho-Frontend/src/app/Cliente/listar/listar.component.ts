import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Cliente } from 'src/app/Modelo/Cliente';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clientes: Cliente[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'func', 'cpf', 'telefone', 'email','endereco','dataNascimento', 'acao'];

  constructor(private service: ServiceService, private router: Router, private _snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.data = this.clientes;
    this.carregarClientes();
  }

  carregarClientes() {
    this.service.getCliente()
      .subscribe(data => {
        this.clientes = data;
        this.dataSource.data = this.clientes;
      });
  }

  Editar(cliente: Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(cliente:Cliente){
    this.service.deleteCliente(cliente)
      .subscribe(data=>{
        this.clientes=this.clientes.filter(p=>p!==cliente);
        this.dataSource.data = this.clientes;
        this._snackBar.open('Cliente deletado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
