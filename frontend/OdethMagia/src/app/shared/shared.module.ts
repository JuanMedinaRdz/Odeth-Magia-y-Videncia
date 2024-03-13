import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BiographyComponent } from '../Home/pages/biography/biography.component';
import { CarouselComponent } from '../Home/pages/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    SidebarComponent,
    NavbarComponent,
    CommonModule,
    BiographyComponent,
    CarouselComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BiographyComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }
