import {Routes} from '@angular/router';
import { CategoriaIndexPageComponent } from './categoria-index-page/categoria-index-page.component';
import { CategoriaDetailPageComponent } from './categoria-detail-page/categoria-detail-page.component';
import { CategoriaEditPageComponent } from './categoria-edit-page/categoria-edit-page.component';

export const CategoriaAdminPagesRoutes: Routes = [
  {path: '', component: CategoriaIndexPageComponent},
  {path: ':oid/detail', component: CategoriaDetailPageComponent},
  {path: 'edit', component: CategoriaEditPageComponent},
  {path: ':oid/edit', component: CategoriaEditPageComponent}
];
