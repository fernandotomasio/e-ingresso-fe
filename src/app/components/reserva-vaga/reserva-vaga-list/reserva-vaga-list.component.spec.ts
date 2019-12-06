import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVagaListComponent } from './reserva-vaga-list.component';

describe('ReservaVagaListComponent', () => {
  let component: ReservaVagaListComponent;
  let fixture: ComponentFixture<ReservaVagaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVagaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVagaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
