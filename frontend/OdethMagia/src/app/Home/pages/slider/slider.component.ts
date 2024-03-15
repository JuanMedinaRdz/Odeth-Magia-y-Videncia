import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('slider')
  sliderRef!: ElementRef;
  interval: any;

  slideImages = [
    'assets/images/slide-1.jpg',
    'assets/images/slide-2.jpg',
    'assets/images/slide-3.jpg'
    // Agrega más rutas de imágenes según sea necesario
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.startSlider();
  }

  moveSlider(direction: number): void {
    const slider: HTMLElement = this.sliderRef.nativeElement;
    const items = slider.querySelectorAll('.item');

    items.forEach((item: Element, index: number) => {
      const itemElement = item as HTMLElement; // Conversión de tipo para resolver el error
      if (index === 0) {
        itemElement.style.opacity = '0'; // Oculta la primera imagen
      } else {
        itemElement.style.opacity = '1'; // Muestra las demás imágenes
      }
    });

    slider.appendChild(items[0]);
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      this.moveSlider(1);
    }, 5000); // Cambia la imagen cada 5 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
