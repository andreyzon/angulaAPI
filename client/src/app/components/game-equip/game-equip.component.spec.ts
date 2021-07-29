import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEquipComponent } from './game-equip.component';

describe('GameEquipComponent', () => {
  let component: GameEquipComponent;
  let fixture: ComponentFixture<GameEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
