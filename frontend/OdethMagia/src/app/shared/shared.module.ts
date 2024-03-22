import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BiographyComponent } from '../Home/pages/biography/biography.component';
import { NewsSectionComponent } from '../Home/pages/news-section/news-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
  ],
  imports: [
    SidebarComponent,
    NavbarComponent,
    CommonModule,
    BiographyComponent,
    NewsSectionComponent,
    CarouselModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BiographyComponent,
    NewsSectionComponent,
  ]
})
export class SharedModule { }
