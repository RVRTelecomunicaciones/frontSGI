import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeDigitalizadosComponent } from './informe-digitalizados.component';

describe('InformeDigitalizadosComponent', () => {
  let component: InformeDigitalizadosComponent;
  let fixture: ComponentFixture<InformeDigitalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeDigitalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeDigitalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
