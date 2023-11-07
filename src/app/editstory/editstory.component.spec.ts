import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstoryComponent } from './editstory.component';

describe('EditstoryComponent', () => {
  let component: EditstoryComponent;
  let fixture: ComponentFixture<EditstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditstoryComponent]
    });
    fixture = TestBed.createComponent(EditstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
