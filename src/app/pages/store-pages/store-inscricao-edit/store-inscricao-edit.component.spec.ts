import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInscricaoEditComponent } from './store-inscricao-edit.component';

describe('StoreInscricaoEditComponent', () => {
  let component: StoreInscricaoEditComponent;
  let fixture: ComponentFixture<StoreInscricaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInscricaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInscricaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
