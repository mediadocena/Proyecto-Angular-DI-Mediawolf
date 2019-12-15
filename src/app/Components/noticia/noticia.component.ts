import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private noticiaService:NoticiasService) { }
  id;
  noticia;
  comentarios;
  ngOnInit() {
    this.id=this.noticiaService.getId();
    this.noticiaService.getNoticiasId(this.id).subscribe((data)=>{
      this.noticia=data;
      this.comentarios=this.noticia.comentarios;
    },(error)=>{
      console.log('Error al obtener la noticia');
    });
    console.log(this.noticia)
  }

}
