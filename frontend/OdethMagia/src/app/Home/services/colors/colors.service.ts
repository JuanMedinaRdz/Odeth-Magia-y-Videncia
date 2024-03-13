import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ColorsService {
    // Define tus colores aquí
    colors: { [key: string]: string } = {
      background: '#C2A9A9',
      text: '#000000',
      // Otros colores que desees agregar
    };

    constructor() {

    }

    getColor(key: string): string {
        return this.colors[key];
    }
}