import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosequipoPageRoutingModule } from './datosequipo-routing.module';

import { DatosequipoPage } from './datosequipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosequipoPageRoutingModule
  ],
  declarations: [DatosequipoPage]
})
export class DatosequipoPageModule {}
