import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  constructor(private http:HttpClient) {

   }
  datos:[any]=[{}];
  mail: String;
  pass1:String;
  pass2:String;
  //Método que recupera datos de la api, para pintarlos en una variable:
  //TO-DO: Crear servicios para interactuar con la api usando este método de ejemplo:
 /*  getData(){
    this.http.get('http://localhost:3000/api/users').subscribe(
      (response)=>{
      const aux:[any]=[{}];
      aux.push(response);
      console.log(aux);
      aux.forEach(element => {
        this.datos=(element);
      });
    },(error) => console.log('error'));
    console.log(this.datos);
   }*/
  ngOnInit() {
    //this.getData();
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
