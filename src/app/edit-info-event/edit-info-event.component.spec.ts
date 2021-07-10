import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoEventComponent } from './edit-info-event.component';

describe('EditInfoEventComponent', () => {
  let component: EditInfoEventComponent;
  let fixture: ComponentFixture<EditInfoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
