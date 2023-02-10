import { products } from "../data/products.js";
import Product from "../classes/product.js";

export const watchs = products.map(
  (product) =>
    new Product(
      product.id,
      product.brand,
      product.description,
      product.features,
      product.imageUrl,
      product.price,
      product.stock
    )
);
