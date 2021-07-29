import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso2Component } from './piso2.component';

describe('Piso2Component', () => {
  let component: Piso2Component;
  let fixture: ComponentFixture<Piso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Piso2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
