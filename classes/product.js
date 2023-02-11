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
    console.log(data)
    console.log(JSON.stringify(data))

    // fetch('https://https://bsite.net/metalflap/td-producto', {
    //   method: "POST",
    //   body: JSON.stringify(_data),
    //   headers: {"Content-type": "application/json; charset=UTF-8"}
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));
    // .catch(err => console.log(err));
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
    fechData('https://bsite.net/metalflap/td-producto', options)
  }
}
