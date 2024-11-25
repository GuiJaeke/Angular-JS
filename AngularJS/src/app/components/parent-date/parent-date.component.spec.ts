import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDateComponent } from './parent-date.component';

describe('ParentDateComponent', () => {
  let component: ParentDateComponent;
  let fixture: ComponentFixture<ParentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
