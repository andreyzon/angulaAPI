import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNodesComponent } from './list-nodes.component';

describe('ListNodesComponent', () => {
  let component: ListNodesComponent;
  let fixture: ComponentFixture<ListNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
