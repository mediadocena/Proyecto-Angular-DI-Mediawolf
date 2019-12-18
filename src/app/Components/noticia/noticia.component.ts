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
  idu;
  noticia:Noticia; 
  comentarios:[Comentarios];
  comentarioW;
   ngOnInit() {
    this.idu = JSON.parse(localStorage.getItem('token')).userId;
    console.log('JAKSndñojasbfo',JSON.parse(localStorage.getItem('token')).userId)
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
      comen.iduser= datos.id;
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
  Eliminar(id){
    this.noticia.comentarios.splice(id,1);
    this.noticiaService.updateNoticia(this.noticia.id,this.noticia).subscribe((response)=>{
    },(error)=>{
      console.log(`error al actualizar noticia`),
      console.log(this.noticia);
    });
  }

}
