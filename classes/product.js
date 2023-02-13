import { fechData } from "../utils/fechData.js";
export default class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.nombre;
    this.price = data.precio;
    this.link = data.link;
    this.stock = data.stock;
    this.label = data.etiqueta;
    this.description = data.descripcion;
    this.idCategoria = data.idCategoria;
    this.idSucursal = data.idSucursal;
  }

  addProducts() {
    this.products = [];
    this.products.push(this);
    return this.products;
  }

  getProduct(id) {
    this;
  }
  getProducts() {
    return this.addProducts();
  }

  sendData() {
    let data = {
      id: this.id,
      nombre: this.name,
      precio: this.price,
      link: this.link,
      stock: this.stock,
      etiqueta: this.label,
      descripcion: this.description,
      idCategoria: this.idCategoria,
      idSucursal: this.idSucursal,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    fechData("https://bsite.net/metalflap/td-producto", options);
  }
}
