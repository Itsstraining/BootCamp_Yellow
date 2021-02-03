import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMenuComponent } from './home-menu.component';

const routes: Routes = [{ path: '', component: HomeMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMenuRoutingModule { }
