import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsComponent } from './content-lessons.component';

describe('LessonsComponent', () => {
  let component: LessonsComponent;
  let fixture: ComponentFixture<LessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonsComponent],
    });
    fixture = TestBed.createComponent(LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
