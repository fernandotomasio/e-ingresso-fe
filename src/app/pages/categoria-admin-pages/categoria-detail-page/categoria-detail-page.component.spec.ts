import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDetailPageComponent } from './categoria-detail-page.component';

describe('CategoriaDetailPageComponent', () => {
  let component: CategoriaDetailPageComponent;
  let fixture: ComponentFixture<CategoriaDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
