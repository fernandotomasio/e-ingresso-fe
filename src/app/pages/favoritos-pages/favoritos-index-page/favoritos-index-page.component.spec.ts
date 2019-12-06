import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosIndexPageComponent } from './favoritos-index-page.component';

describe('FavoritosIndexPageComponent', () => {
  let component: FavoritosIndexPageComponent;
  let fixture: ComponentFixture<FavoritosIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
