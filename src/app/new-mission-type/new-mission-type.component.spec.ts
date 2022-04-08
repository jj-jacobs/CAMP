import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMissionTypeComponent } from './new-mission-type.component';

describe('NewMissionTypeComponent', () => {
  let component: NewMissionTypeComponent;
  let fixture: ComponentFixture<NewMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
