import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../Models/NoticiasModel';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) {

   }

   public id;

   getNoticias(){
     return this.http.get('http://localhost:3000/api/noticias').pipe(
      map( this.crearArreglo ),
      delay(0)
    );
    }

    getNoticiaPorId(id){
    let a = localStorage.getItem('token')
    let token = JSON.parse(a).id;
      return this.http.get(`http://localhost:3000/api/noticias/${id}?access_token=${token}`);
       }

       
      private crearArreglo( noticiaOBJ: object ) {

        const noticias:Noticia[] = [];
    
        Object.keys( noticiaOBJ ).forEach( key => {
    
          const noticia:Noticia = noticiaOBJ[key];
          
    
          noticias.push( noticia );
        });
        return noticias;
      }
    saveId(id){
      this.id=id;
    }
    getId(){
      return this.id;
    }
}
