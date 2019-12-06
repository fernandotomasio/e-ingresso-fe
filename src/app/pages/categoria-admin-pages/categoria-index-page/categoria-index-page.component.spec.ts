import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaIndexPageComponent } from './categoria-index-page.component';

describe('CategoriaIndexPageComponent', () => {
  let component: CategoriaIndexPageComponent;
  let fixture: ComponentFixture<CategoriaIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
