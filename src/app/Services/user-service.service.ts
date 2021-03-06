import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../cons/constantes';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }

  postUser(data:{}){
    let a:any = data;
    this.http.post(`${URL_API}users`,data).subscribe(
      (response)=>{
        if(a.rol == 'user'){
        this.loginUser(data);
        }
        console.log('okay');
        alert('¡Usuario Creado!')
    },(error) =>
      alert('Error, por favor asegurese de que los datos introducidos son válidos'));
  }
  putUser(data:{}){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    this.http.put(`${URL_API}users/${id}?access_token=${token}`,data).subscribe(
      (response)=>{
        console.log('usuario modificado: ',data);
      }
    );
  }
  obtenerUsuario(){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    console.log(token);
    return this.http.get(`${URL_API}users/${id}?access_token=${token}`)
  }
  loginUser(user){
    this.http.post(`${URL_API}users/login`,user).subscribe(
      (response)=>{
        localStorage.setItem('token',JSON.stringify(response));
        localStorage.setItem('pass',JSON.stringify(user.password));
        console.log('Correct login');
        this.guardarRol();
        window.location.reload();
        //JSON.parse() para convertir el string almacenado en un JSON.
      },(error) => {
        console.log('error',error.error.error.message)
        alert('Usuario o contraseña incorrectos')
      }
      ); 
  }
  guardarRol(){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    let datos;
    this.http.get(`${URL_API}users/${id}?access_token=${token}`).subscribe((data)=>{
       datos = data;
       localStorage.setItem('rol',JSON.stringify(datos.rol));
    });
  }
  logoutUser(alcachofa:any){
    console.log(JSON.parse(alcachofa).id);
    this.http.post(`${URL_API}users/logout?access_token=`+JSON.parse(alcachofa).id, null).subscribe(
      (response)=>{
       
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        console.log('okay');
        window.location.reload();
    },
    (error) => {
      console.log('error');
    localStorage.removeItem('token');
    window.location.reload();
  });
  }

  changePassword(newpass,oldpass){
    let local = JSON.parse(localStorage.getItem('token'));
    let token = local.id;
    return this.http.post(`${URL_API}users/change-password?access_token=${token}`,{
      'newPassword':newpass,
      'oldPassword':oldpass});
  }
  /*tokenCaducado(){
    var token = localStorage.getItem('token');
    var isExpiredToken = false;
    if(token.)
  }*/
}
