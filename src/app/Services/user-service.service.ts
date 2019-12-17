import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }

  postUser(data:{}){
    this.http.post('http://localhost:3000/api/users',data).subscribe(
      (response)=>{console.log('okay')},(error) => console.log('error'));
  }
  obtenerUsuario(){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    console.log(token);
    return this.http.get(`http://localhost:3000/api/users/${id}?access_token=${token}`)
  }
  loginUser(user){
    this.http.post('http://localhost:3000/api/users/login',user).subscribe(
      (response)=>{
        localStorage.setItem('token',JSON.stringify(response));
        console.log('Correct login');
        window.location.reload();
        //JSON.parse() para convertir el string almacenado en un JSON.
      },(error) => {
        console.log('error',error.error.error.message)
        alert('Usuario o contraseña incorrectos')
      }
      ); 
  }
  logoutUser(alcachofa:any){
    console.log(JSON.parse(alcachofa).id);
    this.http.post(`http://localhost:3000/api/users/logout?access_token=`+JSON.parse(alcachofa).id, null).subscribe(
      (response)=>{
       
        localStorage.removeItem('token');
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
