import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) {

   }
   /*this.http.get('http://localhost:3000/api/users').subscribe(
    (response)=>{
    const aux:[any]=[{}];
    aux.push(response);
    console.log(aux);
    aux.forEach(element => {
      this.datos=(element);
    });
  },(error) => console.log('error'));
  console.log(this.datos);*/
   getNoticias(){
     return this.http.get('http://localhost:3000/api/noticias')
      }
    /*saveId(id){
      localStorage.setItem('noticia',id);
    }
    getId(){
      var id = localStorage.getItem('noticia');
      localStorage.removeItem('noticia');
      return id;
    }*/
}
