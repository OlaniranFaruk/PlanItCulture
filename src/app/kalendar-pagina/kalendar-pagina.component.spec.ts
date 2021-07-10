import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarPaginaComponent } from './kalendar-pagina.component';

describe('KalendarPaginaComponent', () => {
  let component: KalendarPaginaComponent;
  let fixture: ComponentFixture<KalendarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalendarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
