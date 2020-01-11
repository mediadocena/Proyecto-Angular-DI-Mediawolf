import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http:HttpClient) { }

  public uploadImage(image: File){
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('http://localhost:3000/api/images/images/upload',formData);
  }

}
