import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private URL:URL,private http:HttpClient) { }

  postUser(data:{}){
    this.http.post(`${this.URL}users`,data).subscribe(
      (response)=>{console.log('okay')},(error) =>
      alert('Error, por favor asegurese de que los datos introducidos son válidos'));
  }
  putUser(data:{}){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    this.http.put(`${this.URL}users/${id}?access_token=${token}`,data).subscribe(
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
    return this.http.get(`${this.URL}users/${id}?access_token=${token}`)
  }
  loginUser(user){
    this.http.post(`${this.URL}users/login`,user).subscribe(
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
    this.http.get(`${this.URL}users/${id}?access_token=${token}`).subscribe((data)=>{
       datos = data;
       localStorage.setItem('rol',JSON.stringify(datos.rol));
    });
  }
  logoutUser(alcachofa:any){
    console.log(JSON.parse(alcachofa).id);
    this.http.post(`${this.URL}users/logout?access_token=`+JSON.parse(alcachofa).id, null).subscribe(
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
  /*tokenCaducado(){
    var token = localStorage.getItem('token');
    var isExpiredToken = false;
    if(token.)
  }*/
}
