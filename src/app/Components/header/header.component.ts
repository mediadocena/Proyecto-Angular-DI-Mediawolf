import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserServiceService,private auth:AuthService) { }
  logged:boolean;
  rol;
  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.logged=false;
    }else if(this.auth.isAuthenticated()){
      this.logged=true;
    }else{
      this.logged=false;
    }
  }
  delogin(){
    var a = localStorage.getItem('token');
    this.userService.logoutUser(a);
  }
  role(){
    this.userService.obtenerUsuario().subscribe((data)=>{
      this.rol = data;
      this.rol = this.rol.rol;
    });
  }
  

}
