import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { CreateRoomComponent } from './pages/Quang/components/dialogs/createDialog/create-room/create-room.component';
// import { JoinRoomComponent } from './pages/Quang/components/dialogs/joinDialog/join-room/join-room.component';


@NgModule({
  declarations: [
    AppComponent,
    // CreateRoomComponent,
    // JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
