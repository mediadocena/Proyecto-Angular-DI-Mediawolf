import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Services/noticias.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Router, ActivatedRoute } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-listanoticias',
  templateUrl: './listanoticias.component.html',
  styleUrls: ['./listanoticias.component.css']
})
export class ListanoticiasComponent implements OnInit {

  constructor(private noticia:NoticiasService, private router:Router,private param:ActivatedRoute) { }

  noticias:any[]=[];
  p:number=1;
  rol;
  idElim;
  categoria:string;
  searchArgs:string;
  tpp = 15;
  ngOnInit() {
    this.param.params.subscribe(event => {
      this.categoria = event.categoria;
     });
    this.ObtenerNoticias()
  }

  ObtenerNoticias(){
    switch (this.categoria) {
      case 'Videojuegos':
        this.noticia.getNoticias().subscribe((data:any)=>{
        
          for(let da of data){
            if(da.categoria=='Videojuegos'){
              this.noticias.push(da);
            }
          }
          console.log(this.noticias)
        },(error)=>{
          console.log('algo ha fallado')
        })
        this.role();
        break;
        case 'Tecnologia':
        this.noticia.getNoticias().subscribe((data:any)=>{
          console.log(data);
          for(let da of data){
            console.log(da);
            if(da.categoria=='Tecnologia'){
              console.log(da);
              this.noticias.push(da);
            }
          }
          console.log(this.noticias)
        },(error)=>{
          console.log('algo ha fallado')
        })
        this.role();
        break;
        case 'Offtopic':
        this.noticia.getNoticias().subscribe((data:any)=>{
          for(let da of data){
            if(da.categoria=='Offtopic'){
              this.noticias.push(da);
            }
          }
          console.log(this.noticias)
        },(error)=>{
          console.log('algo ha fallado')
        })
        this.role();
        break;
        case 'UltimasNoticias':
        this.noticia.getNoticias().subscribe((data:any)=>{
              this.noticias = data;
              this.noticias.reverse();
          console.log(this.noticias)
        },(error)=>{
          console.log('algo ha fallado')
        })
        this.role();
        break;
      default:
        break;
    }
    
  }
  Busqueda(args:string){
    if(args == ''){
      this.ObtenerNoticias();
      this.p = 1;
    }else{
    this.noticia.search(args).subscribe((res:any)=>{
      this.noticias = res;
      this.p = 1;
    },(err)=>{
      this.noticias = []
      alert('¡Vaya!, parece que hemos tenido un problema')
    })
  }
  }
  iranoticia(id){
    console.log(this.noticias[1]._id)
    console.log(id);
    this.noticia.saveId(id);
    this.router.navigate([`/Noticias/${id}`]);
  }
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }
  role(){
    this.rol = JSON.parse(localStorage.getItem('rol'));
  }
  Eliminar(){
    let noticiaid = this.noticias[this.idElim].id;
    console.log(this.noticias[this.idElim].titulo);
    console.log(noticiaid);
    this.noticia.deleteNoticia(noticiaid).subscribe((response)=>{
      //alert('Noticia Eliminada');
      window.location.reload();
    },(err)=>alert('error al eliminar la noticia'));
  }

  Modificar(id){
    this.router.navigate(['/ModificarNoticia/'+id]);
  }
  PreEliminar(idElim){
    this.idElim = idElim;

  }
}
