import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorGridComponent } from './calculator-grid.component';

describe('CalculatorGridComponent', () => {
  let component: CalculatorGridComponent;
  let fixture: ComponentFixture<CalculatorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
