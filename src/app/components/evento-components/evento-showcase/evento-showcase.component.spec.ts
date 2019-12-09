import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoShowcaseComponent } from './evento-showcase.component';

describe('EventoShowcaseComponent', () => {
  let component: EventoShowcaseComponent;
  let fixture: ComponentFixture<EventoShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
