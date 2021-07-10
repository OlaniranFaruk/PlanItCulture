import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPaginaComponent } from './contact-pagina.component';

describe('ContactPaginaComponent', () => {
  let component: ContactPaginaComponent;
  let fixture: ComponentFixture<ContactPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
