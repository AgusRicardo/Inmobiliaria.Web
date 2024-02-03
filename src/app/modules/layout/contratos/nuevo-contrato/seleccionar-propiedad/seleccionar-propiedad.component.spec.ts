import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarPropiedadComponent } from './seleccionar-propiedad.component';

describe('SeleccionarPropiedadComponent', () => {
  let component: SeleccionarPropiedadComponent;
  let fixture: ComponentFixture<SeleccionarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
