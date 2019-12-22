import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
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
}
