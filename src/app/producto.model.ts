export class Producto {
    private id: number;
    private nombre: string;
    private precio: number;
    private categoria: string;
    private marca: string;
    private stock: number;
    private estado: boolean;
    private destacado: boolean;

    constructor(id: number, nombre: string, precio: number, categoria: string, marca: string, stock: number, estado: boolean, destacado: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.marca = marca;
        this.stock = stock;
        this.estado = estado;
        this.destacado = destacado;
    };

    getId() { return this.id; }
    getNombre() { return this.nombre; }
    getPrecio() { return this.precio; }
    getCategoria() { return this.categoria; }
    getMarca() { return this.marca; }
    getStock() { return this.stock; }
    getEstado() { return this.estado; }
    getDestacado() { return this.destacado; }

}