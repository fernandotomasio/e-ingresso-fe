import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import {AvatarComponent} from './avatar/avatar.component';
import {AvatarMiniComponent} from './avatar-mini/avatar-mini.component';
import {InputImageUploadComponent} from './input-image-upload/input-image-upload.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    InputImageUploadComponent,
    AvatarMiniComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    InputImageUploadComponent,
    AvatarMiniComponent,
    AvatarComponent
  ],
  providers: [MenuItems]
})
export class SharedModule {}
