import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCakeComponent } from './display-cake.component';

describe('DisplayCakeComponent', () => {
  let component: DisplayCakeComponent;
  let fixture: ComponentFixture<DisplayCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
