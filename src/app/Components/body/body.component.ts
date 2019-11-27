import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  constructor(private noticiasService:NoticiasService) { }
  noticias:any=[];
  ngOnInit() {
    this.noticiasService.getNoticias().subscribe(  (data) => { 
      this.noticias = data;
    },
    (error) => {
      console.error(error);
    }
  )
   
  }
  /*savenoticia(id){
    this.noticiasService.saveId(id);
  }*/

}
