import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoDetailComponent } from './indicacao-detail.component';

describe('IndicacaoDetailComponent', () => {
  let component: IndicacaoDetailComponent;
  let fixture: ComponentFixture<IndicacaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
