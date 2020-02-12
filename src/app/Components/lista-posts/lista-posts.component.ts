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
  ngOnInit() {
    this.router.params.subscribe(event => {
      this.categoria = event.categoria;
     });
     this.mode();
  }
  mode(){
    switch (this.categoria) {
      case 'Videojuegos':
        this.post.getPosts().subscribe((res:any)=>{
          let p:any;
          for(p in res){
            if(p.categoria =='Videojuegos'){
              this.posts.titulo = p.titulo;
            }
          }
        })
        break;
      case 'Tecnologia':
        this.post.getPosts().subscribe((res:any)=>{
          let p:any;
          for(p in res){
            if(p.categoria =='Tecnologia'){
              this.posts.titulo = p.titulo;
            }
          }
        })
        break;
        case 'Offtopic':
          this.post.getPosts().subscribe((res:any)=>{
            let p:any;
            for(p in res){
              if(p.categoria =='Offtopic'){
                this.posts.titulo = p.titulo;
              }
            }
          })
        break;
      default:
        break;
    }
  }

}
