import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: '/store',
        pathMatch: 'full'
      },
      {
        path: 'store',
        loadChildren: './pages/store-pages/store-pages.module#StorePagesModule'
      },
      {
        path: 'categorias',
        loadChildren: './pages/categoria-admin-pages/categoria-admin-pages.module#CategoriaAdminPagesModule'
      },
      {
        path: 'eventos',
        loadChildren: './pages/evento-admin-pages/evento-admin-pages.module#EventoAdminPagesModule'
      },
      {
        path: 'pessoas',
        loadChildren: './pages/pessoa-admin-pages/pessoa-admin-pages.module#PessoaAdminPagesModule'
      },
      {
        path: 'favoritos',
        loadChildren: './pages/favoritos-pages/favoritos-pages.module#FavoritosPagesModule'
      },
      {
        path: 'workflow',
        loadChildren: './pages/workflow-pages/workflow-pages.module#WorkflowPagesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
