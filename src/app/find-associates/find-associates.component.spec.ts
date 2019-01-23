import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAssociatesComponent } from './find-associates.component';

describe('FindAssociatesComponent', () => {
  let component: FindAssociatesComponent;
  let fixture: ComponentFixture<FindAssociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAssociatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
