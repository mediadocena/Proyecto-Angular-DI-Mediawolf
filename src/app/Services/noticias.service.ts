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
   getNoticias(){
     return this.http.get('http://localhost:3000/api/noticias').pipe(
      map( this.crearArreglo ),
      delay(0)
    );
      }

      private crearArreglo( noticiaOBJ: object ) {

        const noticias:Noticia[] = [];
    
        Object.keys( noticiaOBJ ).forEach( key => {
    
          const noticia:Noticia = noticiaOBJ[key];
          noticia.id = key;
    
          noticias.push( noticia );
        });
        return noticias;
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
