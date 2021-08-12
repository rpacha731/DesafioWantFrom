import { Component } from '@angular/core';
import { Producto } from 'src/app/producto.model';

@Component({
	selector: 'app-producto',
	templateUrl: './producto.component.html',
	styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
	producto!: Producto;
	
	constructor() { }
}
