import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/Services/imagenes.service';
class ImageSnippet {
  constructor(public src: string, public file: File,public name) {}
}

@Component({
  selector: 'app-crearnoticia',
  templateUrl: './crearnoticia.component.html',
  styleUrls: ['./crearnoticia.component.css']
})
export class CrearnoticiaComponent implements OnInit {

  constructor(private imageService:ImagenesService,private sanitizer:DomSanitizer,private noticia:NoticiasService) { }
  cuerpo=""; 
  img="blank";
  ext;
  titulo="";
  subtitulo="";
  categoria="Videojuegos";
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
imagename="";
file;
nombreIcono;
  ngOnInit() {
  }
  publicar(){
    this.nombreIcono = `${this.titulo.trim()}Img`+'.'+this.ext;
    this.imagename =`http://localhost:3000/api/images/images/download/${this.nombreIcono}`;
    this.subirImagen();
    let noticia = {
      titulo:this.titulo,
      subtitulo:this.subtitulo,
      img:`${this.imagename}`,
      categoria: this.categoria,
      cuerpo:this.cuerpo,
      comentarios:[]
    }
    this.noticia.postNoticias(noticia);
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    this. file = files[0];
    this.ext=this.file.name;
    this.ext = this.ext.slice((this.ext.lastIndexOf(".") - 1 >>> 0) + 2);
  if (files && this.file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.img= btoa(binaryString);
          console.log(btoa(binaryString));
  }

  subirImagen(){
    
          this.imageService.uploadImage(this.img, this.nombreIcono).subscribe(
            (res) => {
              
            },
            (err) => {
              alert('Ha ocurrido un error en la subida de la imagen:'+err.err);
            })
  }


}
