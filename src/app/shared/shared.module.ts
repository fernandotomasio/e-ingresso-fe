import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputImageUploadComponent } from './input-image-upload/input-image-upload.component';
import { AvatarMiniComponent } from './avatar-mini/avatar-mini.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [InputImageUploadComponent, AvatarMiniComponent, AvatarComponent],
  exports: [
    InputImageUploadComponent, AvatarMiniComponent, AvatarComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
