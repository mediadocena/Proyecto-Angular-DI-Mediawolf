import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnoticiaComponent } from './modificarnoticia.component';

describe('ModificarnoticiaComponent', () => {
  let component: ModificarnoticiaComponent;
  let fixture: ComponentFixture<ModificarnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
