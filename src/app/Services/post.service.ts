import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  postPost(post){
    return this.http.post('http://localhost:3000/api/posts',post);
  }
  getPosts(){
    return this.http.get('http://localhost:3000/api/posts');
  }
  getPostsById(id){
    return this.http.get('http://localhost:3000/api/posts/'+id);
  }
  putPostById(id,post){
    return this.http.put('http://localhost:3000/api/posts/'+id,post);
  }
  deletePost(id){
    return this.http.delete('http://localhost:3000/api/posts/'+id);
  }
}
