import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoCategoriasComponent } from './foro-categorias.component';

describe('ForoCategoriasComponent', () => {
  let component: ForoCategoriasComponent;
  let fixture: ComponentFixture<ForoCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
