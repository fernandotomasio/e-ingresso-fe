import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoContainerComponent } from './indicacao-container.component';

describe('IndicacaoRepositoryComponent', () => {
  let component: IndicacaoContainerComponent;
  let fixture: ComponentFixture<IndicacaoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
