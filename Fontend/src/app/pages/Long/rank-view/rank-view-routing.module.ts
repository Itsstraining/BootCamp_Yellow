import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankViewComponent } from './rank-view.component';

const routes: Routes = [{ path: '', component: RankViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankViewRoutingModule { }
