import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
export class data{
realm : string;
username : string;
password : string;
email : string;
emailVerified : false}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  postUser(data) : Observable <data>{

    //El backend recogerá un parametro json

    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    console.log(this.http.post("http://localhost:3000/api/users", data, {headers: headers}));
    
    //return this.http.post("http://localhost:3000/api/users", data, {headers: headers});

    return this.http.post<data>('http://localhost:3000/api/users', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1)
    )

    /*
    return this.http.post("http://localhost:3000/explorer/#!/user/user_create",data).toPromise().then(this.extracData)
    this.http.post("http://localhost:3000/explorer/#!/user/user_create",data)
    */
  }
}
