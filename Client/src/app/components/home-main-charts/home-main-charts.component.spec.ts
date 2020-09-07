import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainChartsComponent } from './home-main-charts.component';

describe('HomeMainChartsComponent', () => {
  let component: HomeMainChartsComponent;
  let fixture: ComponentFixture<HomeMainChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
