import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API, URL_API_PY } from '../cons/constantes';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  postPost(post){
    return this.http.post(URL_API+'posts',post);
  }
  getPosts(){
    return this.http.get(URL_API+'posts');
  }
  getPostsById(id){
    return this.http.get(URL_API+'posts/'+id);
  }
  putPostById(id,post){
    return this.http.put(URL_API+'posts/'+id,post);
  }
  deletePost(id){
    return this.http.delete(URL_API+'posts/'+id);
  }
  searchPost(args:string){
    return this.http.get(`${URL_API_PY}BusquedaPost/`+args);
  }
}
