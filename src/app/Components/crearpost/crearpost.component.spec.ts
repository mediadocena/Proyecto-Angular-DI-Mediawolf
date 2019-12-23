import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpostComponent } from './crearpost.component';

describe('CrearpostComponent', () => {
  let component: CrearpostComponent;
  let fixture: ComponentFixture<CrearpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
