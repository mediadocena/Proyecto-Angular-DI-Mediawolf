import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private post:PostService) { }

  categoria;
  posts;
  titulo;
  rol;
  p;
  tpp;

  ngOnInit() {
    this.router.params.subscribe(event => {
      this.categoria = event.categoria;
     });
     this.mode();
  }
  Eliminar(id){
    this.posts.slice(id,1);
  }
  Modificar(){

  }
  pageChanged(){

  }
  mode(){
    switch (this.categoria) {
      case 'Videojuegos':
        this.post.getPosts().subscribe((res:any)=>{
          this.posts = res;
          res.forEach(element => {
            let tit = element.titulo
            if(element.categoria == 'Videojuegos'){
              this.titulo = tit;
            }
          });{
          }
        })
        break;
      case 'Tecnologia':
        this.post.getPosts().subscribe((res:any)=>{
          this.posts = res;
          res.forEach(element => {
            let tit = element.titulo
            if(element.categoria == 'Tecnologia'){
              this.titulo = tit;
            }
          });{
          }
        })
        break;
        case 'Offtopic':
          this.post.getPosts().subscribe((res:any)=>{
            this.posts = res;
            res.forEach(element => {
              let tit = element.titulo
              if(element.categoria == 'Offtopic'){
                this.titulo = tit;
              }
            });{
            }
          })
        break;
      default:
        break;
    }
  }

}
