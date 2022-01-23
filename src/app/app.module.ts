import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // remove if server logging not setup
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
      enableSourceMaps: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
