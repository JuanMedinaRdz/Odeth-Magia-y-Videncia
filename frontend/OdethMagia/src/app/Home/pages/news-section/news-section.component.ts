import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";


interface NewsCard {
  id: number;
  text: string;
  imageUrl: string;
}

@Component({
    selector: 'news-section',
    standalone: true,
    templateUrl: './news-section.component.html',
    styleUrls: ['./news-section.component.css'],
    imports: [TitleComponent, CommonModule]
})


export class NewsSectionComponent implements AfterViewInit {
  newsTitle = "Testimonials";



  @ViewChild('slider', { static: true }) slider!: ElementRef;
  
  newsCards: NewsCard[] = [
    { id: 1, text: "Consequat aliquip incididunt proident labore commodo ipsum nulla tempor. Ullamco amet laboris et do enim. Pariatur sint ea nostrud veniam commodo enim.", imageUrl: '' },
    { id: 2, text: "Laboris in incididunt sint anim do dolor velit. Commodo magna minim qui consectetur fugiat proident ipsum commodo labore do irure aliquip. Proident pariatur non mollit sunt veniam. Occaecat tempor laboris minim sint ullamco proident duis exercitation nisi officia irure. Ex cillum laboris non consectetur non.", imageUrl: '' },
    { id: 3, text: "Labore voluptate laborum velit irure incididunt. Excepteur occaecat sint nostrud esse adipisicing. Consectetur aliquip ut labore fugiat magna magna.", imageUrl: '' },
     { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1111111", imageUrl: '' },
    { id: 2, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 22222222222 ", imageUrl: '' },
    { id: 3, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.33333", imageUrl: '' },
    // Añade más tarjetas según sea necesario
  ];

  constructor() {
    this.newsCards = this.newsCards.concat(this.newsCards);
   }


  ngAfterViewInit(): void {
      this.startSlider
  }

  startSlider(): void {
    setInterval(() => {
      const firstCard = this.newsCards.shift();

      this.newsCards.push(firstCard!);
      this.slider.nativeElement.style.transition = 'transform is ease-in-out';
      this.slider.nativeElement.style.transition = 'translateX(-100%)';
      setTimeout(()=> {
        this.slider.nativeElement.style.transition = 'none';
        this.slider.nativeElement.style.transition = 'translateX(0)';
      }, 1000);
    }, 3000);
  }
  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.moveSlider();
  //   }, 3000); // Cambia el valor según la velocidad deseada
  // }

  // moveSlider(): void {
  //   const firstCard = this.newsCards.shift();
  //   this.newsCards.push(firstCard!);
  //   this.slider.nativeElement.scrollTo({
  //     left: this.slider.nativeElement.scrollLeft + 320, // Ancho de la tarjeta + margen
  //     behavior: 'smooth'
  //   });
  // }
}