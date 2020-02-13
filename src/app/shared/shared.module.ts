import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputImageUploadComponent } from './input-image-upload/input-image-upload.component';



@NgModule({
  declarations: [InputImageUploadComponent],
  exports: [
    InputImageUploadComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
