import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSection } from './level-section';

describe('LevelSection', () => {
  let component: LevelSection;
  let fixture: ComponentFixture<LevelSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
