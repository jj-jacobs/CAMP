import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformLibraryComponent } from './platform-library.component';

describe('PlatformLibraryComponent', () => {
  let component: PlatformLibraryComponent;
  let fixture: ComponentFixture<PlatformLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
