import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGarantesComponent } from './agregar-garantes.component';

describe('AgregarGarantesComponent', () => {
  let component: AgregarGarantesComponent;
  let fixture: ComponentFixture<AgregarGarantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarGarantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarGarantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
