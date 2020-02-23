import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { PostModel } from 'src/app/Models/PostModel';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router:ActivatedRoute,private post:PostService,private user:UserServiceService) {
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
  comentarioDummy;
  auth;
  id;
  idu = "";
  isButtonVisible:boolean=false;
  p;
  rol;
  postPage:PostModel;
  ngOnInit() {
    this.router.params.subscribe(event => {
      this.id = event.id;
     });
     this.rol = JSON.parse(localStorage.getItem('rol'));
     this.obtenerPost();
     console.log('aaaa'+this.idu);
     this.isAuth();
  }
  isAuth(){
    console.log(this.idu)
    if(this.idu!=""){
      this.auth=true;
    }else{
      this.auth=false;
    }
  }
  obtenerPost(){
    this.post.getPostsById(this.id).subscribe((res)=>{
      let dummy:any = res;
      console.log(dummy);
      this.postPage = dummy;

    },(err)=>{
      console.log(err);
      alert('Ha ocurrido un error al obtener el post: \n'+err.err)
    })
  }
  Publicar(){
    let datos;
    let nick;
    let icono;
    let cuerpo;
    this.user.obtenerUsuario().subscribe((data)=>{
      datos = data;
      icono = datos.icono;
      console.log(icono)
      nick = datos.username;
      let dummy = {
        'iduser':this.idu,
        'nick': nick,
        'icono':icono,
        'cuerpo':this.comentarioDummy
      }
      this.postPage.comentarios.push(dummy);
    this.post.putPostById(this.id,this.postPage).subscribe((res)=>{
      alert('¡Comentario subido!');
    },(err)=>{
      alert('Error al subir comentario: \n'+err.err);
    })
    }); 
  }
  Eliminar(id){
    this.postPage.comentarios.splice(id,1);
    this.post.putPostById(this.postPage.id,this.postPage).subscribe((response)=>{
      //window.location.reload();
    },(error)=>{
      console.log(`error al actualizar noticia`),
      console.log(this.postPage);
    });
  }
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }

}
