import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigiInfoPageRoutingModule } from './digi-info-routing.module';

import { DigiInfoPage } from './digi-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigiInfoPageRoutingModule
  ],
  declarations: [DigiInfoPage]
})
export class DigiInfoPageModule {}
