import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetailPageComponent } from './pessoa-detail-page.component';

describe('PessoaDetailPageComponent', () => {
  let component: PessoaDetailPageComponent;
  let fixture: ComponentFixture<PessoaDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
