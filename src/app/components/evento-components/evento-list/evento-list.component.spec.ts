import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoListComponent } from './evento-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('EventoListComponent', () => {
  let component: EventoListComponent;
  let fixture: ComponentFixture<EventoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EventoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoListComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
