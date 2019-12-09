import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaInputComponent } from './pessoa-input.component';

describe('PessoaInputComponent', () => {
  let component: PessoaInputComponent;
  let fixture: ComponentFixture<PessoaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
