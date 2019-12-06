import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoIndexPageComponent } from './evento-index-page.component';

describe('EventoIndexPageComponent', () => {
  let component: EventoIndexPageComponent;
  let fixture: ComponentFixture<EventoIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
