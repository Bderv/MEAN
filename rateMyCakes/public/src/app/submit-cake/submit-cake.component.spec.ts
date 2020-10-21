import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCakeComponent } from './submit-cake.component';

describe('SubmitCakeComponent', () => {
  let component: SubmitCakeComponent;
  let fixture: ComponentFixture<SubmitCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
