import { Comentarios } from './ComentariosModel';

export class Noticia{
    categoria:string;
    titulo:string;
    subtitulo:string;
    img:string;
    cuerpo:string;
    comentarios:[Comentarios];
    id:string;
    constructor(categoria?,titulo?,subtitulo?,img?,cuerpo?,comentarios?){
        this.categoria=categoria;
        this.titulo=titulo;
        this.subtitulo=subtitulo;
        this.img=img;
        this.cuerpo=cuerpo;
        this.comentarios=comentarios;
    }
    devolverArray(){
    return this.comentarios;
    }

}