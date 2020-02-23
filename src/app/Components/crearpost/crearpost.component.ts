import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-crearpost',
  templateUrl: './crearpost.component.html',
  styleUrls: ['./crearpost.component.css']
})
export class CrearpostComponent implements OnInit {

  constructor(private post:PostService) { }
  cuerpoPost="Algo de texto...";
  titulo;
  categoria;
  cuerpo;
  userId;
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

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('token')).userId;
  }

  subirPost(){
    console.log(this.titulo)
    let postModel={
      titulo:this.titulo,
      userId:this.userId,
      categoria:this.categoria,
      cuerpo:this.cuerpo,
      comentarios:[]
    }
    this.post.postPost(postModel).subscribe((resp)=>{
      alert('Post creado');
    },(err)=>{
      alert('Error al crear post: \n'+err);
    });
  }

}
