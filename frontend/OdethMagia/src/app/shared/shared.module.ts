import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BiographyComponent } from '../Home/pages/biography/biography.component';
import { NewsSectionComponent } from '../Home/pages/news-section/news-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    SidebarComponent,
    NavbarComponent,
    CommonModule,
    BiographyComponent,
    NewsSectionComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BiographyComponent,
    NewsSectionComponent
  ]
})
export class SharedModule { }
