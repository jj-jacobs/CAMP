import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMissionPlanComponent } from './new-mission-plan.component';

describe('NewMissionPlanComponent', () => {
  let component: NewMissionPlanComponent;
  let fixture: ComponentFixture<NewMissionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMissionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMissionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
