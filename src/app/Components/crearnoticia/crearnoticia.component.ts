import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NoticiasService } from 'src/app/Services/noticias.service';

@Component({
  selector: 'app-crearnoticia',
  templateUrl: './crearnoticia.component.html',
  styleUrls: ['./crearnoticia.component.css']
})
export class CrearnoticiaComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,private noticia:NoticiasService) { }
  cuerpo='Preview Noticia ...'; 
  titulo="Un titulo";
  subtitulo="Un subtitulo";
  categoria="Videojuegos";
  ngOnInit() {
  }
  publicar(){
    let noticia = {
      titulo:this.titulo,
      subtitulo:this.subtitulo,
      categoria:this.categoria,
      cuerpo:this.cuerpo
    }
    this.noticia.postNoticias(noticia);
  }

}
