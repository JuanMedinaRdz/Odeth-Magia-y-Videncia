import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";

@Component({
    selector: 'biography',
    standalone: true,
    templateUrl: './biography.component.html',
    styleUrls: ['./biography.component.css'],
    imports: [TitleComponent]
})
export class BiographyComponent  {
  aboutMeTitle = "Acerca de Mi"
}
