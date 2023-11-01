import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstoryComponent } from './regstory.component';

describe('RegstoryComponent', () => {
  let component: RegstoryComponent;
  let fixture: ComponentFixture<RegstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegstoryComponent]
    });
    fixture = TestBed.createComponent(RegstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
