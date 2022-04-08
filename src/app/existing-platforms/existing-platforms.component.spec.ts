import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPlatformsComponent } from './existing-platforms.component';

describe('ExistingPlatformsComponent', () => {
  let component: ExistingPlatformsComponent;
  let fixture: ComponentFixture<ExistingPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
