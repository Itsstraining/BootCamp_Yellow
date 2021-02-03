import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/Duy/login/login.module').then(m => m.LoginModule) },
  { path: 'room', loadChildren: () => import('./pages/Duy/room/room.module').then(m => m.RoomModule) },

  { path: 'mainplay', loadChildren: () => import('./pages/Long/play-view/play-view.module').then(m => m.PlayViewModule) },
  { path: 'ranktable', loadChildren: () => import('./pages/Long/rank-view/rank-view.module').then(m => m.RankViewModule) },

  { path: 'menuhome', loadChildren: () => import('./pages/Quang/home-menu/home-menu.module').then(m => m.HomeMenuModule) },

  { path: '', loadChildren: () => import('./pages/Duc/home-temp/home-temp.module').then(m => m.HomeTempModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
