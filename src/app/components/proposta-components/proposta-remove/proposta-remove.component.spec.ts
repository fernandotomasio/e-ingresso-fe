import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaRemoveComponent } from './proposta-remove.component';

describe('PropostaRemoveComponent', () => {
  let component: PropostaRemoveComponent;
  let fixture: ComponentFixture<PropostaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
