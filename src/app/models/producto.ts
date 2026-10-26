export class Producto{
    // Las propiedades deben ser públicas
    public nombre: string;
    public imagen: string;
    public precio: number;

    // Tendremos un constructor para enviar los datos al crear un modelo
    constructor(name: string, image: string, price: number){
        this.nombre = name;
        this.imagen = image;
        this.precio = price;
    }
}