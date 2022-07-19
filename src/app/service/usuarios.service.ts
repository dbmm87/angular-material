import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/ususarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listUsuarios: Usuarios[] = [
    {user:"DBMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"PPMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"OOMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"EEMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"AAMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"DBMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"BBMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"RRMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"},
    {user:"CCMM87" , name: 'DEMETRIO', lastname: "MENDEZ", gender: "H"}
  ,
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }
  deleteId(index:number){
   this.listUsuarios.splice(index, 1);
  }
  addUser(user:Usuarios){
    this.listUsuarios.unshift(user);
  }
}
