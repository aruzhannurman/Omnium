import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactsComponent } from './content-contacts.component';

describe('ContentContactsComponent', () => {
  let component: ContentContactsComponent;
  let fixture: ComponentFixture<ContentContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentContactsComponent]
    });
    fixture = TestBed.createComponent(ContentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
