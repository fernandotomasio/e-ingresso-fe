import {Routes} from '@angular/router';
import {PessoaIndexPageComponent} from './pessoa-index-page/pessoa-index-page.component';
import {PessoaDetailPageComponent} from './pessoa-detail-page/pessoa-detail-page.component';
import {PessoaEditPageComponent} from './pessoa-edit-page/pessoa-edit-page.component';

export const PessoaAdminPagesRoutes: Routes = [
  {path: '', component: PessoaIndexPageComponent},
  {path: ':oid/detail', component: PessoaDetailPageComponent},
  {path: 'edit', component: PessoaEditPageComponent},
  {path: ':oid/edit', component: PessoaEditPageComponent}
];
