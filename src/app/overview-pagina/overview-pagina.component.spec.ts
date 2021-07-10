import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPaginaComponent } from './overview-pagina.component';

describe('OverviewPaginaComponent', () => {
  let component: OverviewPaginaComponent;
  let fixture: ComponentFixture<OverviewPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
