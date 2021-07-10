import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEnKostenramingComponent } from './budget-en-kostenraming.component';

describe('BudgetEnKostenramingComponent', () => {
  let component: BudgetEnKostenramingComponent;
  let fixture: ComponentFixture<BudgetEnKostenramingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEnKostenramingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEnKostenramingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
