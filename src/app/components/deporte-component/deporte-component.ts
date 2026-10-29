import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  public mensaje!: string;

  mostrarFavorito(): void {
    this.mensaje = 'Su deporte favorito es ' + this.sport;
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
