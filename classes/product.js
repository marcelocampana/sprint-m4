import { fechData } from "../utils/fechData.js";
export default class Product {
  constructor(id, name, price, link, stock, label, description, idCategoria, idSucursal) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.link = link;
    this.stock = stock;
    this.label = label;
    this.description = description;
    this.idCategoria = idCategoria;
    this.idSucursal = idSucursal;
  }

  sendData () {
    let data = {
      id: this.id,
      nombre: this.name, 
      precio: this.price,
      link: this.link,
      stock: this.stock,
      etiqueta: this.label,
      descripcion: this.description,
      idCategoria: this.idCategoria,
      idSucursal: this.idSucursal
      }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
    fechData('https://bsite.net/metalflap/td-producto', options)
  }
}
