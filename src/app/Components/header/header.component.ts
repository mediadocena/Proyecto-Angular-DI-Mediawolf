import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private router:ActivatedRoute,private userService:UserServiceService,private auth:AuthService) { }
  logged:boolean;
  rol;
  icono;
  ngOnInit() {
   this.inicio();
  }

  inicio(){
    this.role();
    if(localStorage.getItem('token')==null){
      this.logged=false;
    }else if(this.auth.isAuthenticated()){
      this.obtenerIcono();
      this.logged=true;
    }else{
      this.logged=false;
    }
  }
  obtenerIcono(){
    let dato;
    this.userService.obtenerUsuario().subscribe((data)=>{
      dato = data;
      this.icono = dato.icono;
    },(error)=>{
      console.log('ha ocurrido un error al obtener datos')
    });
  }
  delogin(){
    var a = localStorage.getItem('token');
    this.userService.logoutUser(a);
  }
  role(){
    this.rol = JSON.parse(localStorage.getItem('rol'));
  }
  

}
