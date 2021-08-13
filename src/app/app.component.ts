import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	titulo = 'DesafioWantFrom';

	productos: Array<Producto> = // Id, Nombre, Precio, Categoria, Marca, Stock, Estado, Destacado
		[new Producto(1, "IPhone 12", 125500, "Celulares", "Apple", 10, true, true),
		new Producto(2, "IPhone 11", 100000, "Celulares", "Apple", 0, false, false),
		new Producto(3, "IPhone 10", 87000, "Celulares", "Apple", 12, true, false),
		new Producto(4, "Samsung A10", 37000, "Celulares", "Samsung", 17, true, false),
		new Producto(5, "Set cubiertos de Plata x 12", 1500, "Bazar", "Plata Limpia", 23, true, false),
		new Producto(6, "Pava eléctrica Liliana 4 Lts", 4500, "Electrodomésticos", "Liliana", 7, true, false),
		new Producto(7, "Notebook HP Omen 15 8GB I5 512 GB SSD", 255000, "Computadoras", "HP", 2, true, true),
		new Producto(100, "Mouse inalámbrico BT 2.4 GHz", 1780, "Accesorios PC", "Noga", 11, false, false),
		new Producto(105, "Galletas Oreo clasicas", 75, "Alimentos", "Arcor", 69, true, false),
		new Producto(1202, "Cable USB 2 Mts", 350, "Accesorios Celulares", "Cablecito", 5, true, false),
		new Producto(1568, "Juliana maquillaje artistico", 5312, "Juguetes", "Juliana", 0, true, false),
		new Producto(303, "Audi A3 Hot Wheels", 2155, "Juguetes", "Hot Wheels", 4, true, false),
		new Producto(698, "Jabon Dove 1/4 crema humectante", 67.5, "Cuidado Corporal", "Dove", 150, true, false),
		new Producto(258, "Placa de MDF 15 mm x mt2", 1352.6, "Construcción", "Maderas Argentinas", 651, false, false),
		new Producto(324, "Tornillos autoperforantes 6 x 1' Tel-Fix x 100 u", 632.1, "Ferreteria", "Tel-Fix", 25, true, true),
		new Producto(125, "Acolchado de 1 1/2 plaza", 6500, "Acolchados", "Plumita", 4, true, false),
		new Producto(289, "Colchon Canon 1 1/2 plaza Eco", 21570, "Colchones", "Canon", 16, true, true),
		new Producto(3187, "Smartband MiBand 5", 4500, "Relojes Inteligentes", "Xiaomi", 7, true, false)];

	ordenar(opt: string) {
		if (opt.includes("id")) {
			this.productos.sort((p1, p2) => {
				if (p1.getId() > p2.getId()) return 1;
				if (p1.getId() < p2.getId()) return -1;
				return 0;
			});
		}
		if (opt.includes("nombre")) {
			this.productos.sort((p1, p2) => {
				if (p1.getNombre() > p2.getNombre()) return 1;
				if (p1.getNombre() < p2.getNombre()) return -1;
				return 0;
			});
		}
		if (opt.includes("precio")) {
			this.productos.sort((p1, p2) => {
				if (p1.getPrecio() > p2.getPrecio()) return 1;
				if (p1.getPrecio() < p2.getPrecio()) return -1;
				return 0;
			});
		}
		if (opt.includes("catego")) {
			this.productos.sort((p1, p2) => {
				if (p1.getCategoria() > p2.getCategoria()) return 1;
				if (p1.getCategoria() < p2.getCategoria()) return -1;
				return 0;
			});
		}
		if (opt.includes("marca")) {
			this.productos.sort((p1, p2) => {
				if (p1.getMarca() > p2.getMarca()) return 1;
				if (p1.getMarca() < p2.getMarca()) return -1;
				return 0;
			});
		}
		if (opt.includes("stock")) {
			this.productos.sort((p1, p2) => {
				if (p1.getStock() < p2.getStock()) return 1;
				if (p1.getStock() > p2.getStock()) return -1;
				return 0;
			});
		}
		if (opt.includes("estado")) {
			this.productos.sort((p1, p2) => {
				return (p1.getEstado() === p2.getEstado()) ? 0 : p1.getEstado() ? -1 : 1;
			});
		}
		if (opt.includes("destac")) {
			this.productos.sort((p1, p2) => {
				return (p1.getDestacado() === p2.getDestacado()) ? 0 : p1.getDestacado() ? -1 : 1;
			});
		}
	}

}

