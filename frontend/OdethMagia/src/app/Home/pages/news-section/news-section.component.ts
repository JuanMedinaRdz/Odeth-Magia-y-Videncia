import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";


@Component({
    selector: 'news-section',
    standalone: true,
    templateUrl: './news-section.component.html',
    styleUrls: ['./news-section.component.css'],
    imports: [TitleComponent]
})
export class NewsSectionComponent {
  newsTitle = "titulo de la pinche noticia"
}
