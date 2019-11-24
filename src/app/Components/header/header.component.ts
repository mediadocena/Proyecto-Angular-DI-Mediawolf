import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() { }
  logged:boolean;
  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.logged=false;
    }else{
      this.logged=true;
    }
  }
  

}
