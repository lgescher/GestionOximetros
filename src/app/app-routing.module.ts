import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: ":id",
      loadChildren: () => import('./datosequipo/datosequipo.module').then( m => m.DatosequipoPageModule)      
      }
    ]
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'datosequipo',
    loadChildren: () => import('./datosequipo/datosequipo.module').then( m => m.DatosequipoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
