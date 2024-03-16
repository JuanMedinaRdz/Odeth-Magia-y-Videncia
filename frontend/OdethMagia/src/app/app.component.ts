import { Component } from '@angular/core';
import { ColorsService } from './Home/services/colors/colors.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'OdethMagia';

  constructor(private colorsService: ColorsService) {

  }

  getBackgroundColor(): string {
    return this.colorsService.getColor('background')
  }

}
