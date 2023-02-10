import Inventory from "../classes/inventory.js";
import { watchs } from "../utils/createProduct.js";

export const inventory = new Inventory();

watchs.forEach((watch) => {
  inventory.addProduct(watch);
});
