export default class Product {
  constructor(id, brand, description, features, imageUrl, price, stock) {
    (this.id = id),
      (this.brand = brand),
      (this.description = description),
      (this.features = features),
      (this.imageUrl = imageUrl),
      (this.price = price),
      (this.stock = stock);
  }

  getProduct() {
    return this.brand + " " + this.description;
  }
}
