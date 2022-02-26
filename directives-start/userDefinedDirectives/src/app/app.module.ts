import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDirctive } from './basicSimple/basicSimple.directive';
import { BasicCorrectWayDirective } from './basicCorrectWay/basic-correct-way.directive';
import { BasicStructDirDirective } from './basicStructDirective/basic-struct-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirctive,
    BasicCorrectWayDirective,
    BasicStructDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
