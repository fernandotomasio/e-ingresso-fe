import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputImageUploadComponent } from './input-image-upload/input-image-upload.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [InputImageUploadComponent, AvatarComponent],
  exports: [
    InputImageUploadComponent, AvatarComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
