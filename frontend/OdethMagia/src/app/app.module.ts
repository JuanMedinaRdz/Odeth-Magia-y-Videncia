import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsSectionComponent } from './Home/pages/news-section/news-section.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NewsSectionComponent,
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),

  ],
  exports: [
    NewsSectionComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
