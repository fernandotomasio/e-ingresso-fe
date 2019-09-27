import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEventosPageComponent } from './store-eventos-page.component';

describe('StoreEventosPageComponent', () => {
  let component: StoreEventosPageComponent;
  let fixture: ComponentFixture<StoreEventosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEventosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEventosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
