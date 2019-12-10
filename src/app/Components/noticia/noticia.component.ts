import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private noticiaService:NoticiasService) { }
  titulo;
  subtitulo;
  img;
  id = this.noticiaService.getId();
  ngOnInit() {
    
  }

}
