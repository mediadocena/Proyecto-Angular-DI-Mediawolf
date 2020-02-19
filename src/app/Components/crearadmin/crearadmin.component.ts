import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-crearadmin',
  templateUrl: './crearadmin.component.html',
  styleUrls: ['./crearadmin.component.css']
})
export class CrearadminComponent implements OnInit {

  constructor(private userservice:UserServiceService) { }

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
      rol: 'admin',
      icono:'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      username : this.username,
      password : this.pass1,
      email : this.mail,
      emailVerified : false
    }
    this.userservice.postUser(tmp);
  }

}
