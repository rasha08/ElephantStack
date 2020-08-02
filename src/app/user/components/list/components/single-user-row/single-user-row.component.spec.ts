import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserRowComponent } from './single-user-row.component';

describe('SingleUserRowComponent', () => {
  let component: SingleUserRowComponent;
  let fixture: ComponentFixture<SingleUserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
