import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  items = [
    {description: '1.- Laboris anim incididunt minim magna aute proident eiusmod mollit eu dolor sint mollit.'},
    {description: '2.- Hola soy la descripción numero 2 por lo que quiero ser la 2 en el preciso momento'},
    {description: '3.- Magna aliqua aliquip reprehenderit elit duis. Adipisicing Lorem pariatur consectetur ad. Eu ea elit aliqua veniam veniam. Laboris aliquip amet amet velit et ullamco officia qui ad laborum. Et eiusmod sit laborum sunt id aliqua nisi mollit id est reprehenderit duis irure tempor. Velit dolor ullamco ipsum commodo.'},
    {description: '4.- Eu velit ullamco ut dolore eiusmod et nostrud consectetur dolor et occaecat nostrud. Duis tempor aliqua nisi non deserunt eiusmod ipsum pariatur eu ipsum occaecat quis. Occaecat adipisicing proident sit laboris magna minim voluptate magna ipsum reprehenderit do elit ad.'},
    {description: '4.- Eu velit ullamco ut dolore eiusmod et nostrud consectetur dolor et occaecat nostrud. Duis tempor aliqua nisi non deserunt eiusmod ipsum pariatur eu ipsum occaecat quis. Occaecat adipisicing proident sit laboris magna minim voluptate magna ipsum reprehenderit do elit ad.'},

  ];
  currentIndex = 2;
  centralIndex = 2;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateCentralIndex();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCentralIndex();
  }

  updateCentralIndex() {
    this.centralIndex = this.currentIndex;
  }
}

