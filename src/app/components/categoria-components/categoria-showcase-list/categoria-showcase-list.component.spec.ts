import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaShowcaseListComponent } from './categoria-showcase-list.component';

describe('CategoriaShowcaseListComponent', () => {
  let component: CategoriaShowcaseListComponent;
  let fixture: ComponentFixture<CategoriaShowcaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaShowcaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
