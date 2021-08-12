import { Component } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
	productos: Array<Producto> = [new Producto(1, "IPhone 12", 125500, "Celulares", "Apple", true, false)];

	constructor() { }

}
