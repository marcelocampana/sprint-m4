import { products } from "../data/products.js";
import Product from "../classes/product.js";

export const watchs = products.map(
  (product) =>
    new Product(
      product.id,
      product.name,
      product.price,
      product.link,
      product.stock,
      product.label,
      product.description,
      product.idCategoria,
      product.idSurcursal
    )
);