import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/Services/imagenes.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  file: any;
  ext: any;
  img: string;
  nombreIcono:string;
  userid;
  constructor(private imageService:ImagenesService,private user:UserServiceService) { }
  opcion = 'cuenta';
  ngOnInit() {
    this.user.obtenerUsuario().subscribe((resp:any)=>{
      this.userid = resp.id;
    });
  }
  cambiarOpcion(option){
    switch(option){
      case 'cuenta':
        this.opcion='cuenta'
        break;
      case 'foro':
        this.opcion='foro'
        break;
      case 'ayuda':
        this.opcion = 'ayuda'
        break;
      default:
        this.opcion = 'cuenta'
        break;
    }

  }
  handleFileSelect(evt){
    var files = evt.target.files;
    this.file = files[0];
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
    this.nombreIcono = this.nombreIcono+this.ext;
    this.imageService.uploadImage(this.img, this.nombreIcono).subscribe(
      (res) => {
        alert('Se ha actualizado el icono correctamente');
      },
      (err) => {
        alert('Ha ocurrido un error en la subida de la imagen:'+err.err);
      })
}
}
