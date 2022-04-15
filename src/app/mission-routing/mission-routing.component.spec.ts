import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRoutingComponent } from './mission-routing.component';

describe('MissionRoutingComponent', () => {
  let component: MissionRoutingComponent;
  let fixture: ComponentFixture<MissionRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
