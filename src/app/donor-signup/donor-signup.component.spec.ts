import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSignupComponent } from './donor-signup.component';

describe('DonorSignupComponent', () => {
  let component: DonorSignupComponent;
  let fixture: ComponentFixture<DonorSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorSignupComponent]
    });
    fixture = TestBed.createComponent(DonorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
