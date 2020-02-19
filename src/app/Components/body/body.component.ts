import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  constructor(private noticiasService:NoticiasService, private router:Router) { }
  noticias:Noticia[] = [];
  comentario:Comentarios[];
  p;
  tpp = 5;
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

  iranoticia(id){
    console.log(this.noticias[1]._id)
    console.log(id);
    this.noticiasService.saveId(id);
    this.router.navigate([`/Noticias/${id}`]);
  }
  /*savenoticia(id){
    this.noticiasService.saveId(id);
  }*/

}
