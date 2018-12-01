import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbankComponent } from './foodbank.component';

describe('FoodbankComponent', () => {
  let component: FoodbankComponent;
  let fixture: ComponentFixture<FoodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
