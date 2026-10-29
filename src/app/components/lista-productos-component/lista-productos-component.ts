import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto: Producto;
  public listaproductos: Array<Producto>;

  constructor() {
    this.producto = new Producto(
      'Suéter',
      'https://img1.shopcider.com/product/1696859959000-RkT5i7.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
      35
    );

    this.listaproductos = [
      new Producto(
        'Vestido',
        'https://img1.shopcider.com/product/1787191131000-HSARD2.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
        45
      ),
      new Producto(
        'Vestido',
        'https://img1.shopcider.com/product/1788227556000-CKHdY2.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
        50
      ),
      new Producto(
        'Abrigo',
        'https://img1.shopcider.com/product/1762147749000-b3hbR5.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
        65
      ),
      new Producto(
        'Abrigo',
        'https://img1.shopcider.com/product/1758808081000-jtZWMP.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
        80
      ),
      new Producto(
        'Abrigo',
        'https://img1.shopcider.com/product/1789547772000-pXKD3k.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1',
        70
      ),
    ];
  }
}
