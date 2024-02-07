import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPropiedadesComponent } from './dialog-propiedades.component';

describe('DialogPropiedadesComponent', () => {
  let component: DialogPropiedadesComponent;
  let fixture: ComponentFixture<DialogPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPropiedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
