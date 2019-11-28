import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) {

   }
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
