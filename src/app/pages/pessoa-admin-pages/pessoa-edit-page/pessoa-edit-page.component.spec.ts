import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEditPageComponent } from './pessoa-edit-page.component';

describe('PessoaEditPageComponent', () => {
  let component: PessoaEditPageComponent;
  let fixture: ComponentFixture<PessoaEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
