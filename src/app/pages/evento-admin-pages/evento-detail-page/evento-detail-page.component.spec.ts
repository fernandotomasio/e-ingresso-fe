import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailPageComponent } from './evento-detail-page.component';

describe('EventoDetailPageComponent', () => {
  let component: EventoDetailPageComponent;
  let fixture: ComponentFixture<EventoDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
