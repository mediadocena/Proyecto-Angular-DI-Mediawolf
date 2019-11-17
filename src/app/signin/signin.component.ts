import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  mail: String;
  pass1:String;
  pass2:String;
  ngOnInit() {
    
  }
  submit(){
    //TODO - Comprobar mail
    let emailTemp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailTemp.test(String(this.mail).toLowerCase())){
      if(this.pass1==this.pass2){
        //TODO - Guardar usuario en base de datos y mostrar mensaje de confirmación
      }else{
        //Mostrar mensaje de error (contraseña)
        alert('Las contraseñas deben coincidir');
      }
    }else{
      //Mostrar mensaje de error (mail)
      alert('Email no válido');
    }
    
  }

}
