import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaContainerComponent } from './proposta-container.component';

describe('PropostaContainerComponent', () => {
  let component: PropostaContainerComponent;
  let fixture: ComponentFixture<PropostaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
