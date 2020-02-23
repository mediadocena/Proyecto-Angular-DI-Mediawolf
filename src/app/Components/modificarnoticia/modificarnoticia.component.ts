import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagenesService } from 'src/app/Services/imagenes.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { URL_API } from 'src/app/cons/constantes';
class ImageSnippet {
  constructor(public src: string, public file: File,public name) {}
}
@Component({
  selector: 'app-modificarnoticia',
  templateUrl: './modificarnoticia.component.html',
  styleUrls: ['./modificarnoticia.component.css']
})
export class ModificarnoticiaComponent implements OnInit {

  constructor(private router:ActivatedRoute,private imageService:ImagenesService,
    private sanitizer:DomSanitizer,private noticia:NoticiasService, private pagina:Router) { }
  cuerpo=""; 
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
id;
comentarios:[Comentarios];
imagename;
selectedFile: ImageSnippet;
file;
ext;
img;
nombreIcono;
  ngOnInit() {
    this.router.params.subscribe(event => {
      this.id = event.id;
     });
    this.noticia.getNoticiaPorId(this.id).subscribe((data:Noticia)=>{
      this.cuerpo = data.cuerpo;
      this.subtitulo=data.subtitulo;
      this.titulo=data.titulo;
      this.categoria=data.categoria;
      this.comentarios=data.comentarios;
      this.imagename=data.img;
      this.img=data.img;
    })
  }
  publicar(){
    this.nombreIcono = `${this.titulo.trim()}Img`+'.'+this.ext;
    this.imagename =URL_API+`images/images/download/${this.nombreIcono}`;
    this.subirImagen();
    let noticia = {
      id:this.id,
      titulo:this.titulo,
      subtitulo:this.subtitulo,
      img:`${this.imagename}`,
      categoria: this.categoria,
      cuerpo:this.cuerpo,
      comentarios:[]
    }
    console.log(noticia);
    this.noticia.updateNoticia(noticia).subscribe(res=>{
      alert("La noticia se ha actualizado correctamente");
      this.pagina.navigate(['/ListaNoticias/UltimasNoticias']);
    });
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
