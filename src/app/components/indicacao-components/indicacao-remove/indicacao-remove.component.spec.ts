import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoRemoveComponent } from './indicacao-remove.component';

describe('IndicacaoRemoveComponent', () => {
  let component: IndicacaoRemoveComponent;
  let fixture: ComponentFixture<IndicacaoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
