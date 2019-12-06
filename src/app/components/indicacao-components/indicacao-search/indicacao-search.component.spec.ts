import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoSearchComponent } from './indicacao-search.component';

describe('IndicacaoSearchComponent', () => {
  let component: IndicacaoSearchComponent;
  let fixture: ComponentFixture<IndicacaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
