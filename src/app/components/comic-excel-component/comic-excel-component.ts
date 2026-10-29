import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
// Importamos la librería y le damos un alias para trabajar
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-comic-excel-component',
  standalone: false,
  styleUrl: './comic-excel-component.css',
  templateUrl: './comic-excel-component.html',
})
export class ComicExcelComponent {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];

  }

  cargarComics(): void {
    let path = "./assets/comics.xlsx";
    fetch(path).then(response => response.arrayBuffer())
    .then ((buffer) => {
      // Leer el buffer y transformarlo a libro de Excel
      let worbook = XLSX.read(buffer, {type:"array"});
      

      // Parar recuperar las hojas del libro, se hace por name
      // Recuperamos el name de la hoja
      let hojaName = worbook.SheetNames[0];

      // Recuperamos la hoja
      let hoja = worbook.Sheets[hojaName];

      // Como tiene formato de tabla, convertimos a JSON
      let data = XLSX.utils.sheet_to_json(hoja);
      console.log(data);
      this.arrayComics = data.map((c:any) => new Comic (c.nombre, c.imagen, c.descripcion));
      this._cdr.detectChanges();
    })
  }
}
