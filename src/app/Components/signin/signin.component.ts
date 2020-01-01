import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../Services/user-service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  constructor(private http:HttpClient, private userservice:UserServiceService) {

   }
  datos:[any]=[{}];
  mail: String;
  username:String;
  pass1:String;
  pass2:String;
  ngOnInit() {

  }
  submit(){
    let tmp = {
      realm : 'user',
      rol: 'user',
      icono:'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      username : this.username,
      password : this.pass1,
      email : this.mail,
      emailVerified : false
    }
    this.userservice.postUser(tmp);
  }

}
