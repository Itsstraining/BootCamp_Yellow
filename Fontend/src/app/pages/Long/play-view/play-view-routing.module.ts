import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayViewComponent } from './play-view.component';

const routes: Routes = [{ path: '', component: PlayViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayViewRoutingModule { }
