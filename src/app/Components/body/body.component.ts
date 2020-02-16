import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Comentarios } from 'src/app/Models/ComentariosModel';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  constructor(private noticiasService:NoticiasService) { }
  noticias:Noticia[] = [];
  comentario:Comentarios[];
  p;
  tpp = 20;
  ngOnInit() {
    this.getNoticias();
    
  }
  getNoticias(){
    this.noticiasService.getNoticias().subscribe((data) =>{
      this.noticias=data;
      this.comentario = this.noticias[1].comentarios
      console.log(this.noticias)
      console.log(this.comentario)
    },
    (error) => {
      console.error(error);
    }
  )
  }
  pageChanged($event){
    this.p= $event;
  }
  /*savenoticia(id){
    this.noticiasService.saveId(id);
  }*/

}
