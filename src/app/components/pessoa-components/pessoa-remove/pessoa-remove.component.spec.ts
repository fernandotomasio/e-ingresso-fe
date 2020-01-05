import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaRemoveComponent } from './pessoa-remove.component';

describe('PessoaRemoveComponent', () => {
  let component: PessoaRemoveComponent;
  let fixture: ComponentFixture<PessoaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
