import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private noticiaService:NoticiasService,private router:ActivatedRoute) { }
  id;
  noticia:Noticia; 
  comentarios:Comentarios[];
   ngOnInit() {
    this.id= this.router.snapshot.paramMap.get('id');
    /*this.noticiaService.getId();*/
    this.noticiaService.getNoticiaPorId(this.id).subscribe((data:Noticia)=>{
    this.noticia = data;
    this.comentarios = this.noticia.comentarios;
      console.log(this.noticia)
      console.log(this.comentarios)
      console.log(data)
    },(error)=>{
      console.log('Error al obtener la noticia');
    });

  }

  

}
