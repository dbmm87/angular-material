import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/ususarios';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})


export class AgregarUsuarioComponent implements OnInit {

  sexo: any[] = ['Hombre', 'Mujer'];

  formuser:FormGroup;
  

  constructor( private fb:FormBuilder, private _addUserService:UsuariosService, private route:Router) {

   this.formuser = this.fb.group({
     usuario:['', Validators.required],
     nombre:['', Validators.required],
     apellido:['', Validators.required],
     sexo:['', Validators.required]
   })
   }

  ngOnInit(): void {
  
  }

  guardarUsuario(){

      const user:Usuarios = {
          user: this.formuser.value.usuario,
          name: this.formuser.value.nombre,
          lastname: this.formuser.value.apellido,
          gender: this.formuser.value.sexo
        }
      
        this._addUserService.addUser(user);
        this.route.navigate(['/dashboard/usuarios']);
      }

}//Men*Mor02