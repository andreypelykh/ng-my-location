import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsFilterComponent } from './locations-filter.component';

describe('LocationsFilterComponent', () => {
  let component: LocationsFilterComponent;
  let fixture: ComponentFixture<LocationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
