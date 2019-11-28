import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  logged:boolean;
  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.logged=false;
    }else{
      this.logged=true;
    }
  }
  delogin(){
    var a = localStorage.getItem('token');
    this.userService.logoutUser(a);
  }
  

}
