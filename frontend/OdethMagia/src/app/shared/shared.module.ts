import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BiographyComponent } from '../Home/pages/biography/biography.component';
import { NewsSectionComponent } from '../Home/pages/news-section/news-section.component';
import { SliderComponent } from '../Home/pages/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [],
  imports: [
    NavbarComponent,
    CommonModule,
    BiographyComponent,
    NewsSectionComponent,
    SliderComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    BiographyComponent,
    NewsSectionComponent,
    SliderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
