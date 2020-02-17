import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/Services/imagenes.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  file: any;
  ext: any;
  img: string;
  showSpinner:boolean = false;
  nombreIcono:string;
  userid;
  userObj;
  constructor(private spinner: NgxSpinnerService,private imageService:ImagenesService,private user:UserServiceService) { }
  opcion = 'cuenta';
  ngOnInit() {
    
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

  cambiarImagen(){
    this.user.obtenerUsuario().subscribe((resp:any)=>{
      this.nombreIcono = resp.id;
      this.userObj = {
        "username":resp.username,
        "password": JSON.parse(localStorage.getItem('pass')),
        "realm":resp.realm,
        "icono": "",
        "email":resp.email,
        "rol":resp.rol
      };
      this.subirImagen();
      this.userObj.icono = `http://localhost:3000/api/images/images/download/${this.nombreIcono}`;
      this.user.putUser(this.userObj);
    });
    

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
    this.nombreIcono = this.nombreIcono+'.'+this.ext;
      this.spinner.show();
    this.imageService.uploadImage(this.img, this.nombreIcono).subscribe(
      (res) => {
        
        alert('Se ha actualizado el icono correctamente');
        this.spinner.hide();
      },
      (err) => {
        alert('Ha ocurrido un error en la subida de la imagen:'+err.err);
      })
}
}
