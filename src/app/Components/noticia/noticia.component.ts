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
    private user:UserServiceService) {
      if(JSON.parse(localStorage.getItem('token'))!=null){
      this.idu = JSON.parse(localStorage.getItem('token')).userId;
      }
    }
    config = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "250",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": true,
      "placeholder": "Enter text here...",
      "imageEndPoint": "",
      "toolbar": [
          ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
          ["fontName", "fontSize", "color"],
          ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
          ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
          ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
          ["link", "unlink", "image", "video"]
      ]
  };
  id;
  tpp = 5;
  auth:boolean;
  p:number=1;
  idu="";
  isButtonVisible:boolean = false;
  noticia:Noticia; 
  total;
  comentarios:[Comentarios];
  comentarioW;
   ngOnInit() {
    this.router.params.subscribe(event => {
      this.id = event.id;
     });
    this.Obtener();
    this.isAuth();
   console.log(this.idu);
  }
  Obtener(){
    this.noticiaService.getNoticiaPorId(this.id).subscribe((data:Noticia)=>{
    this.noticia = data;
    this.comentarios = this.noticia.comentarios;
    this.total = this.comentarios.length;
      console.log('AAAAAAAAAAAAAAAAAAA',this.noticia)
      console.log(this.comentarios)
      console.log(data)
    },(error)=>{
      console.log('Error al obtener la noticia');
    });
  }
  isAuth(){
    console.log(this.idu)
    if(this.idu!=""){
      this.auth=true;
    }else{
      this.auth=false;
    }
  }
  Publicar(){
    if(this.comentarioW==""||this.comentarioW== undefined||this.comentarioW==null){
      alert('No es posible introducir comentarios vacios');
    }else{
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
      comen.id= datos.id;
      comen.cuerpo = this.comentarioW;
      this.comentarios.push(comen);
      
      dummy={
        id:this.id,
        categoria:this.noticia.categoria,
        titulo:this.noticia.titulo,
        subtitulo:this.noticia.subtitulo,
        img:this.noticia.img,
        cuerpo:this.noticia.cuerpo,
        comentarios:this.comentarios
      }
      console.log(dummy)
      this.comentarioW="";
      this.noticiaService.updateNoticia(dummy).subscribe((response)=>{
      },(error)=>{
        console.log(`error al actualizar noticia`),
        console.log(dummy)
      });
    },(error)=>{
      console.log('No se ha podido recuperar el usuario');
    });
  }
  }
  Eliminar(id){
    this.noticia.comentarios.splice(id,1);
    this.noticiaService.updateNoticia(this.noticia).subscribe((response)=>{
      //window.location.reload();
    },(error)=>{
      console.log(`error al actualizar noticia`),
      console.log(this.noticia);
    });
  }
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }

}
