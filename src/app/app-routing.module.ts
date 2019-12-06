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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
