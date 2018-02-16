import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingFloorListComponent } from './building-floor-list.component';

describe('BuildingFloorListComponent', () => {
  let component: BuildingFloorListComponent;
  let fixture: ComponentFixture<BuildingFloorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingFloorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingFloorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
