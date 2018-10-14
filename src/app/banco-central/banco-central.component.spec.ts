import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCentralComponent } from './banco-central.component';

describe('BancoCentralComponent', () => {
  let component: BancoCentralComponent;
  let fixture: ComponentFixture<BancoCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
