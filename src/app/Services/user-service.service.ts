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
}
