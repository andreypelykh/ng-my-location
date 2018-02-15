import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingLocationComponent } from './building-location.component';

describe('BuildingLocationComponent', () => {
  let component: BuildingLocationComponent;
  let fixture: ComponentFixture<BuildingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
