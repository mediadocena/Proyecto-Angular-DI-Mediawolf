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

    
    //return this.http.post("http://localhost:3000/explorer/#!/user/user_create",data)
    
  }
}
