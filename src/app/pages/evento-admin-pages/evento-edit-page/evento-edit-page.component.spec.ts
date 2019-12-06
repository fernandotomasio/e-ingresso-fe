import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEditPageComponent } from './evento-edit-page.component';

describe('EventoEditPageComponent', () => {
  let component: EventoEditPageComponent;
  let fixture: ComponentFixture<EventoEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
