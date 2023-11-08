import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signuppage2Component } from './signuppage2.component';

describe('Signuppage2Component', () => {
  let component: Signuppage2Component;
  let fixture: ComponentFixture<Signuppage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Signuppage2Component]
    });
    fixture = TestBed.createComponent(Signuppage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
