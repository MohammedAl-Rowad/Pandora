import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEpicsComponent } from './all-epics.component';

describe('AllEpicsComponent', () => {
  let component: AllEpicsComponent;
  let fixture: ComponentFixture<AllEpicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEpicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
