import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Comentarios } from 'src/app/Models/ComentariosModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagenesService } from 'src/app/Services/imagenes.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
class ImageSnippet {
  constructor(public src: string, public file: File,public name) {}
}
@Component({
  selector: 'app-modificarnoticia',
  templateUrl: './modificarnoticia.component.html',
  styleUrls: ['./modificarnoticia.component.css']
})
export class ModificarnoticiaComponent implements OnInit {

  constructor(private router:ActivatedRoute,private imageService:ImagenesService,private sanitizer:DomSanitizer,private noticia:NoticiasService) { }
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
    })
    

  }
  publicar(){
    let noticia = {
      _id:this.id,
      titulo:this.titulo,
      subtitulo:this.subtitulo,
      img:`${this.imagename}`,
      categoria:this.categoria,
      cuerpo:this.cuerpo,
      comentarios:this.comentarios
    }
    console.log(noticia);
    this.noticia.updateNoticia(noticia).subscribe();
  }
  processFile(imageInput: any) {
    /*Object.defineProperty(imageInput.files[0], 'name', {
      writable: true,
      value: `${this.titulo}-icnoticia`
    });*/
    this.imagename =`http://localhost:3000/api/images/images/download/${imageInput.files[0].name}`;
    console.log(imageInput.files[0].name)
    var file: File = imageInput.files[0];
    
    var reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file,`${this.titulo}-icnoticia`);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

}
