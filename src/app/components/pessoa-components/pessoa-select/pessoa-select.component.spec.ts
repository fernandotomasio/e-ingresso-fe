import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaSelectComponent } from './pessoa-select.component';

describe('PessoaSelectComponent', () => {
  let component: PessoaSelectComponent;
  let fixture: ComponentFixture<PessoaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
