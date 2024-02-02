import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietariosSearchComponent } from './propietarios-search.component';

describe('PropietariosSearchComponent', () => {
  let component: PropietariosSearchComponent;
  let fixture: ComponentFixture<PropietariosSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropietariosSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropietariosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
