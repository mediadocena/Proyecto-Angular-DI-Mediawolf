import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../Models/NoticiasModel';
import { map, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private router:Router,private http:HttpClient) {
    this.token = JSON.parse(localStorage.getItem(`token`)).id;
   }
   token;
   public id;

   getNoticias(){
     return this.http.get('http://127.0.0.1:5000/noticias').pipe(
      map( this.crearArreglo ),
      delay(0)
    );
    }
    postNoticias(noticia){
      let id;
      let data;
      this.http.post('http://localhost:3000/api/noticias',noticia).subscribe((response)=>{
        alert('Noticia Subida')
        data = response;
        id = data.id;
        console.log(id, data);
        this.router.navigate(['Noticias/'+id]);
      },(err)=>{
        alert('Error al subir la noticia')
      });
    }0

    getNoticiaPorId(id){
  
     //return this.http.get(`http://localhost:3000/api/noticias/${id}?access_token=${this.token}`);
       return this.http.get(`http://127.0.0.1:5000/noticiasId?_id=${id}`);
    }

       
      private crearArreglo( noticiaOBJ: object ) {

        const noticias:Noticia[] = [];
    
        Object.keys( noticiaOBJ ).forEach( key => {
    
          const noticia:Noticia = noticiaOBJ[key];
    
          noticias.push( noticia );
        });
        return noticias;
      }

      updateNoticia(id,noticia){
        return this.http.put(`http://localhost:3000/api/noticias/${id}?access_token=${this.token}`,noticia);
      }
    saveId(id){
      this.id=id;
    }
    getId(){
      return this.id;
    }
    deleteNoticia(id){
      return this.http.delete(`http://localhost:3000/api/noticias/${id}?access_token=${this.token}`,id);
    }
}
