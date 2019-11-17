import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  constructor() { }
  noticias= [
    {
      titulo:'titulo1',
      subtitulo:'sub1',
      descripcion:'des1',
      img:'https://m.eldiario.es/cultura/The-Secret-of-Monkey-Island_EDIIMA20150915_0160_18.jpg'
    },
    {
      titulo:'titulo2',
      subtitulo:'sub2',
      descripcion:'des2',
      img:'https://hb.imgix.net/a6050a62b727963a3e30047d4f40fc68065f1b9e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a72468695cbdb4827873d4c376847a13'
    },
    {
      titulo:'titulo3',
      subtitulo:'sub3',
      descripcion:'des3',
      img:'https://hb.imgix.net/a6050a62b727963a3e30047d4f40fc68065f1b9e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a72468695cbdb4827873d4c376847a13'
    }
  ]
  ngOnInit() {
 
  }

}
