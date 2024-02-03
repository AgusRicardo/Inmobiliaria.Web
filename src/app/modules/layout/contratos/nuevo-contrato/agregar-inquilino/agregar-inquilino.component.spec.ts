import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInquilinoComponent } from './agregar-inquilino.component';

describe('AgregarInquilinoComponent', () => {
  let component: AgregarInquilinoComponent;
  let fixture: ComponentFixture<AgregarInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarInquilinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
