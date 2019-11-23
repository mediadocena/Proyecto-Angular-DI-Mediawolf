import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:'',
    password:''
  }
  constructor(private userService:UserServiceService) { }
  ngOnInit() {
  }
  submit(){
    this.userService.loginUser(this.user);
    
    let miPrimeraPromise = new Promise((resolve, reject) => {
      resolve("Abemus Login");
   });

  miPrimeraPromise.then((successMessage) => {
    console.log(JSON.parse(localStorage.getItem('token')));
  });
   
  }

}
