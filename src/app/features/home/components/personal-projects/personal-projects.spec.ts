import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjects } from './personal-projects';

describe('PersonalProjects', () => {
  let component: PersonalProjects;
  let fixture: ComponentFixture<PersonalProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
