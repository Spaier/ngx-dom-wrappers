import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { DomWrappersModule } from 'ngx-dom-wrappers'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DomWrappersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
