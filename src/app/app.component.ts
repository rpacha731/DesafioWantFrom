import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	titulo = 'DesafioWantFrom';
	productos: Array<Producto> = [new Producto(1, "IPhone 12", 125500, "Celulares", "Apple", true, false)];
}
