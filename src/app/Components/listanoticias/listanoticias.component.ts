import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listanoticias',
  templateUrl: './listanoticias.component.html',
  styleUrls: ['./listanoticias.component.css']
})
export class ListanoticiasComponent implements OnInit {

  constructor(private noticia:NoticiasService, private router:Router) { }

  noticias:Noticia[]=[];
  p:number=1;
  ngOnInit() {
    this.noticia.getNoticias().subscribe((data)=>{
      this.noticias=data
    },(error)=>{
      console.log('algo ha fallado')
    })
  }

  iranoticia(id){
    console.log(this.noticias[1].id)
    console.log(id);
    this.noticia.saveId(id);
    this.router.navigate(['/Noticias'])
  }
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }
}
