import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numero-component',
  standalone: false,
  styleUrl: './hijo-numero-component.css',
  templateUrl: './hijo-numero-component.html',
})
export class HijoNumeroComponent {
  @Input() numero!: number;
  @Output() sumarNumerosParen: EventEmitter<any> = new EventEmitter();

  sumarNumero(): void {
    this.sumarNumerosParen.emit(this.numero);
  }
}
