import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoShowcaseListComponent } from './evento-showcase-list.component';

describe('EventoShowcaseListComponent', () => {
  let component: EventoShowcaseListComponent;
  let fixture: ComponentFixture<EventoShowcaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoShowcaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
