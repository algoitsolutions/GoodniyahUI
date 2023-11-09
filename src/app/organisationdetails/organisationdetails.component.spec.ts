import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationdetailsComponent } from './organisationdetails.component';

describe('OrganisationdetailsComponent', () => {
  let component: OrganisationdetailsComponent;
  let fixture: ComponentFixture<OrganisationdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisationdetailsComponent]
    });
    fixture = TestBed.createComponent(OrganisationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
