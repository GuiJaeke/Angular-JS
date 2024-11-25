import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCalcComponent } from './teste-calc.component';

describe('TesteCalcComponent', () => {
  let component: TesteCalcComponent;
  let fixture: ComponentFixture<TesteCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
