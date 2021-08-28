import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesRecordsComponent } from './nodes-records.component';

describe('NodesRecordsComponent', () => {
  let component: NodesRecordsComponent;
  let fixture: ComponentFixture<NodesRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
