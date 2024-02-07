import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInquilinosComponent } from './dialog-inquilinos.component';

describe('DialogInquilinosComponent', () => {
  let component: DialogInquilinosComponent;
  let fixture: ComponentFixture<DialogInquilinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInquilinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogInquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
