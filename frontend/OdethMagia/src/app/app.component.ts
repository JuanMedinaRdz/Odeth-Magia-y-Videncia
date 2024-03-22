import { Component } from '@angular/core';
import { ColorsService } from './Home/services/colors/colors.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'OdethMagia';

  defaultItems = [
    { quote: 'Lorem ipsum dolor sit amet.', name: 'John Doe', title: 'CEO' },
    { quote: 'Consectetur adipiscing elit.', name: 'Jane Smith', title: 'CTO' },
    { quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Alice Johnson', title: 'Designer' }
  ];

  constructor(private colorsService: ColorsService) {

  }

  getBackgroundColor(): string {
    return this.colorsService.getColor('background')
  }

}
