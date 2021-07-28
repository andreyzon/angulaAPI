import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso3Component } from './piso3.component';

describe('Piso3Component', () => {
  let component: Piso3Component;
  let fixture: ComponentFixture<Piso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Piso3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
