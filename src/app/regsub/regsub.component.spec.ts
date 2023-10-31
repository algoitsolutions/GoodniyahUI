import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsubComponent } from './regsub.component';

describe('RegsubComponent', () => {
  let component: RegsubComponent;
  let fixture: ComponentFixture<RegsubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegsubComponent]
    });
    fixture = TestBed.createComponent(RegsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
