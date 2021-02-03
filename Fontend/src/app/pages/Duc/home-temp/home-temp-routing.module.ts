import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTempComponent } from './home-temp.component';

const routes: Routes = [{ path: '', component: HomeTempComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTempRoutingModule { }
