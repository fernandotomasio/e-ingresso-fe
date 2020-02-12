import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageUploadComponent } from './input-image-upload.component';

describe('InputImageUploadComponent', () => {
  let component: InputImageUploadComponent;
  let fixture: ComponentFixture<InputImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
