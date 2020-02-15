
export class PostModel{
    id:string;
    titulo:string;
    userId:string;
    categoria:string;
    cuerpo:string;
    comentarios:[{}];

    constructor(id,titulo,userId,categoria,cuerpo,comentarios?){
        this.id = id;
        this.titulo=titulo;
        this.userId=userId;
        this.categoria=categoria;
        this.cuerpo=cuerpo;
        this.comentarios=comentarios;
    }

}