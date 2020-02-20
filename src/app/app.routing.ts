import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/store',
        pathMatch: 'full'
      },
      {
        path: 'store',
        loadChildren: () => import('./pages/store-pages/store-pages.module').then(m => m.StorePagesModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('./pages/categoria-admin-pages/categoria-admin-pages.module').then(m => m.CategoriaAdminPagesModule)
      },
      {
        path: 'eventos',
        loadChildren:
          () => import('./pages/evento-admin-pages/evento-admin-pages.module').then(m => m.EventoAdminPagesModule)
      },
      {
        path: 'pessoas',
        loadChildren: () => import('./pages/pessoa-admin-pages/pessoa-admin-pages.module').then(m => m.PessoaAdminPagesModule)
      },
      {
        path: 'workflow',
        loadChildren: () => import('./pages/workflow-pages/workflow-pages.module').then(m => m.WorkflowPagesModule)
      }
    ]
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
