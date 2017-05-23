import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppAnimationsComponent } from './app.animations.component';

@NgModule({
  declarations: [
    AppAnimationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppAnimationsComponent]
})
export class AppAnimationsModule { }
