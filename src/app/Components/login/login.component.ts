import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Router } from '@angular/router';

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
  constructor(private userService:UserServiceService,private router:Router) { }
  ngOnInit() {
    //Si esta logeado no puede acceder al login
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/Home']);
    }
  }
  submit(){
    this.userService.loginUser(this.user);
    
    let miPrimeraPromise = new Promise((resolve, reject) => {
      resolve("Abemus Login");
      
   });

  miPrimeraPromise.then((successMessage) => {
    let usert = JSON.parse(localStorage.getItem('token')).id;
    let userid=JSON.parse(localStorage.getItem('token')).userId;
    console.log('UserToken:',usert,'\n userid:',userid);
    window.location.reload();
   
  });
   
  }

}
