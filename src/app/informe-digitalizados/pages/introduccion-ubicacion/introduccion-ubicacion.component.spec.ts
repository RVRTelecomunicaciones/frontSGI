import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionUbicacionComponent } from './introduccion-ubicacion.component';

describe('IntroduccionUbicacionComponent', () => {
  let component: IntroduccionUbicacionComponent;
  let fixture: ComponentFixture<IntroduccionUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
