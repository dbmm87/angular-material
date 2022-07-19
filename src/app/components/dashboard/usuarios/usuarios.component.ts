import {AfterViewInit, Component, OnInit,  ViewChild } from '@angular/core';

import { Usuarios } from 'src/app/interfaces/ususarios';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuariosService } from '../../../service/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {
  listUsuarios:Usuarios[] = [];

  displayedColumns: string[] = ['user', 'name', 'lastname', 'gender', 'options'];

  dataSource!:MatTableDataSource<Usuarios>;
    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _serviceUsuarios:UsuariosService, private _snackbar: MatSnackBar, ) {
    
   }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
   this.listUsuarios = this._serviceUsuarios.getUsuarios();
   this.dataSource = new MatTableDataSource(this.listUsuarios);
   
  }
  deleteUser(id:number){
    console.log(id)
      this._serviceUsuarios.deleteId(id);
      this.obtenerUsuarios();
      this.ngAfterViewInit()
      this._snackbar.open('Usuario Eliminado', '',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      })
  }
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

}
