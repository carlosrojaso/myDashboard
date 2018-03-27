import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSpawnerComponentComponent } from './dashboard-card-spawner-component.component';

describe('DashboardCardSpawnerComponentComponent', () => {
  let component: DashboardCardSpawnerComponentComponent;
  let fixture: ComponentFixture<DashboardCardSpawnerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSpawnerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSpawnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
