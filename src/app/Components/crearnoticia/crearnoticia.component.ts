import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-crearnoticia',
  templateUrl: './crearnoticia.component.html',
  styleUrls: ['./crearnoticia.component.css']
})
export class CrearnoticiaComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  nuevanoticia;
  noticia;
  ngOnInit() {
  }
  
  sanitizeStyle(unsafeStyle: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);
  }
}
