import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumHomeComponent } from './forum-home.component';

describe('ForumAcceuilComponent', () => {
  let component: ForumHomeComponent;
  let fixture: ComponentFixture<ForumHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});