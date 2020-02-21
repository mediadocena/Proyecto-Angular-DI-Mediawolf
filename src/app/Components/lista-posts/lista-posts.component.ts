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
  searchArgs:string;
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
  Busqueda(args:string){
    if(args == ''){
      this.mode();
      this.tpp = 5;
      this.p = 1;
    }else{
    this.post.searchPost(args).subscribe((res:any)=>{
      this.posts = res;
      this.tpp = this.posts.length
      this.p = 1;
      if(res == '')
      alert('¡Vaya!, no hemos podido obtener noticias')
    },(err)=>{
      this.posts = []
      alert('¡Vaya!, parece que hemos tenido un problema')
    })
  }
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
