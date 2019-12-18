import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoRemoveComponent } from './evento-remove.component';

describe('EventoRemoveComponent', () => {
  let component: EventoRemoveComponent;
  let fixture: ComponentFixture<EventoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
