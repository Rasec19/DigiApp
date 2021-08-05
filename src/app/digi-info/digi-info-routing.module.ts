import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigiInfoPage } from './digi-info.page';

const routes: Routes = [
  {
    path: '',
    component: DigiInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigiInfoPageRoutingModule {}
