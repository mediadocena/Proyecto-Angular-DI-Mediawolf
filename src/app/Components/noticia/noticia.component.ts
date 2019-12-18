import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private noticiaService:NoticiasService,
    private router:ActivatedRoute,
    private user:UserServiceService) { }
  id;
  noticia:Noticia; 
  comentarios:[Comentarios];
  comentarioW;
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

  Publicar(){
    let icono,nick,datos;
    let dummy;
    let comen:Comentarios= new Comentarios();
    this.user.obtenerUsuario().subscribe((data)=>{
      datos = data;
      icono = datos.icono;
      console.log(icono)
      nick = datos.username;
      comen.nick = nick;
      comen.icono = icono;
      comen.cuerpo = this.comentarioW;
      this.noticia.comentarios.push(comen);
      dummy={
        categoria:this.noticia.categoria,
        titulo:this.noticia.titulo,
        subtitulo:this.noticia.subtitulo,
        img:this.noticia.img,
        cuerpo:this.noticia.cuerpo,
        comentarios:this.comentarios
      }
     
      this.noticiaService.updateNoticia(this.noticia.id,dummy).subscribe((response)=>{
      },(error)=>{
        console.log(`error al actualizar noticia`),
        console.log(dummy)
      });
    },(error)=>{
      console.log('No se ha podido recuperar el usuario');
    });
    
  }

}
