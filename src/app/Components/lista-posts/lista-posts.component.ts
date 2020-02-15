import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { PostModel } from 'src/app/Models/PostModel';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private post:PostService) { }

  categoria;
  posts:PostModel[]=[];
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
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }
  mode(){
    switch (this.categoria) {
      case 'Videojuegos':
        this.post.getPosts().subscribe((res:any)=>{
          for(let re of res){
            if(re.categoria == 'Videojuegos'){
              this.posts.push(re);
            }
        }
        })
        break;
      case 'Tecnologia':
        this.post.getPosts().subscribe((res:any)=>{
          for(let re of res){
            if(re.categoria == 'Tecnologia'){
              this.posts.push(re);
            }
        }
        })
        break;
        case 'Offtopic':
          this.post.getPosts().subscribe((res:any)=>{
            for(let re of res){
              if(re.categoria == 'Offtopic'){
                this.posts.push(re);
              }
          }
          })
        break;
      default:
        break;
    }
  }

}
