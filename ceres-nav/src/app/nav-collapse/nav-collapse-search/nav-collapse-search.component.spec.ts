import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapseSearchComponent } from './nav-collapse-search.component';

describe('NavCollapseSearchComponent', () => {
  let component: NavCollapseSearchComponent;
  let fixture: ComponentFixture<NavCollapseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCollapseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
