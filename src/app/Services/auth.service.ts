import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  constructor() {}
  
  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    //Fecha de creación del token (UTF)
    let fecha = new Date(JSON.stringify(token.created));
    let fechaExp:Date = new Date();
    //La fecha de caducidad esperada será siempre 14 dias después de la generación del token:
    fechaExp.setDate(fecha.getDate() + 14);
    let hoy:Date = new Date();
    if(hoy > fechaExp){
      console.log('token caducado');
      return false;
    }else{
      console.log('token dentro de fecha')
      return true
    }
  }
}