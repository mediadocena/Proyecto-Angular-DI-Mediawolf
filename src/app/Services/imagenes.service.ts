import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http:HttpClient) { }

  public uploadImage(image:any, name:string){ 
    console.log(image, name);
    return this.http.post(`http://localhost:3000/api/images/FileUpload`,{file:image,name:name});
  }

}
