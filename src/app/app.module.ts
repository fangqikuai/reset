import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { ROUTING }  from './app.router';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { IndexAppModule }  from './index-app/index-app.module';
import { LoginAppModule }  from './login-app/login-app.module';
import { ShareModule }  from './shared';
import { CoreModule } from './core';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    HttpModule,
    RouterModule,
    IndexAppModule,
    LoginAppModule,

    ROUTING
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
