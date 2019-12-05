import { Comentarios } from './ComentariosModel';

export class Noticia{

    titulo:string;
    subtitulo:string;
    img:string;
    cuerpo:string;
    comentarios:[Comentarios];
    id:string;
        constructor(){
        }
    devolverArray(){
    return this.comentarios;
    }

}