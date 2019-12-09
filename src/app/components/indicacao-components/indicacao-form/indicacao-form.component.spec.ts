import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoFormComponent } from './indicacao-form.component';

describe('IndicacaoFormComponent', () => {
  let component: IndicacaoFormComponent;
  let fixture: ComponentFixture<IndicacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
