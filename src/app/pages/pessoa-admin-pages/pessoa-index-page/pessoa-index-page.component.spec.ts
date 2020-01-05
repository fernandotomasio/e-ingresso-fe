import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaIndexPageComponent } from './pessoa-index-page.component';

describe('PessoaIndexPageComponent', () => {
  let component: PessoaIndexPageComponent;
  let fixture: ComponentFixture<PessoaIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
