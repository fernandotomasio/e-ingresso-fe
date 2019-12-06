import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditPageComponent } from './categoria-edit-page.component';

describe('CategoriaEditPageComponent', () => {
  let component: CategoriaEditPageComponent;
  let fixture: ComponentFixture<CategoriaEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
