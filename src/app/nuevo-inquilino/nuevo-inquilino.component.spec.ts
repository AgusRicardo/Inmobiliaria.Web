import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInquilinoComponent } from './nuevo-inquilino.component';

describe('NuevoInquilinoComponent', () => {
  let component: NuevoInquilinoComponent;
  let fixture: ComponentFixture<NuevoInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoInquilinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
