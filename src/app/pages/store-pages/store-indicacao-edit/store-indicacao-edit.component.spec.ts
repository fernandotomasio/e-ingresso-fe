import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIndicacaoEditComponent } from './store-indicacao-edit.component';

describe('StoreIndicacaoEditComponent', () => {
  let component: StoreIndicacaoEditComponent;
  let fixture: ComponentFixture<StoreIndicacaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreIndicacaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreIndicacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
