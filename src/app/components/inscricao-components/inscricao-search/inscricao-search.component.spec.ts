import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoSearchComponent } from './inscricao-search.component';

describe('InscricaoSearchComponent', () => {
  let component: InscricaoSearchComponent;
  let fixture: ComponentFixture<InscricaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
