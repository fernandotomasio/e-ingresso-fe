import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoriasPageComponent } from './store-categorias-page.component';

describe('StoreCategoriasPageComponent', () => {
  let component: StoreCategoriasPageComponent;
  let fixture: ComponentFixture<StoreCategoriasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCategoriasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
