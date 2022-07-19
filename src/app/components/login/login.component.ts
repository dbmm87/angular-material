import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  loading= false;
  constructor( private fb:FormBuilder, private _snackbar: MatSnackBar, private routin:Router) {
    this.formLogin = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.formLogin.value.usuario;
    const password = this.formLogin.value.password;
    if( usuario == 'dbmm87' && password == '123456'){
      this.spinner();
    }else{
      this.errorLogin();
    }
  }

  errorLogin(){
    this._snackbar.open('Usuario o Contraseña incorrecta', '',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  spinner(){
    this.loading =  true;
    setTimeout(() => {
      this.routin.navigate(['dashboard']);
      this.loading = false;
    },1000);
  }

}
