import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelkomPaginaComponent } from './welkom-pagina.component';

describe('WelkomPaginaComponent', () => {
  let component: WelkomPaginaComponent;
  let fixture: ComponentFixture<WelkomPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelkomPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelkomPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
