import { Component } from '@angular/core';
import { Comic } from '../../models/comic'; 

@Component({
  selector: 'app-comic-json-component',
  standalone: false,
  styleUrl: './comic-json-component.css',
  templateUrl: './comic-json-component.html',
})
export class ComicJsonComponent {
  public arrayComics: Array<Comic>;
  constructor() {
    this.arrayComics = [];

  }

  cargarComics(): void {
    // estamos en PUBLIC
    let path ="./assets/comics.json";
    fetch(path).then(response => response.json())
    .then((data: any[]) => {
      // recorremos todo el array de comics JSON
      for (let elem of data){
        // creamos un Comic de Angular
        let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.arrayComics.push(comic);
        console.log(elem);
      }
    })
  }
}
