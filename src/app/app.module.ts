import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyFirstComponent } from './myfirst.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
