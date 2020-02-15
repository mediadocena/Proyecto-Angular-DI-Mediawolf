import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-crearpost',
  templateUrl: './crearpost.component.html',
  styleUrls: ['./crearpost.component.css']
})
export class CrearpostComponent implements OnInit {

  constructor(private post:PostService) { }
  cuerpoPost="Algo de texto...";
  titulo;
  categoria;
  cuerpo;
  userId;

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('token')).userId;
  }

  subirPost(){
    console.log(this.titulo)
    let postModel={
      titulo:this.titulo,
      userId:this.userId,
      categoria:this.categoria,
      cuerpo:this.cuerpo,
      comentarios:[]
    }
    this.post.postPost(postModel).subscribe((resp)=>{
      alert('Post creado');
    },(err)=>{
      alert('Error al crear post: \n'+err);
    });
  }

}
