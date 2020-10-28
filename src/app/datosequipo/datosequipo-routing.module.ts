import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosequipoPage } from './datosequipo.page';

const routes: Routes = [
  {
    path: '',
    component: DatosequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosequipoPageRoutingModule {}
