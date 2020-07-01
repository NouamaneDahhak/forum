import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHomeComponent } from './side-home.component';

describe('SideHomeComponent', () => {
  let component: SideHomeComponent;
  let fixture: ComponentFixture<SideHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
