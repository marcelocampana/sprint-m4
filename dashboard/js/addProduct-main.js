import { inventory } from "../../utils/createInventory.js";
import AddProduct from "./adminComponents/AddProduct.js";
import Sidebar from "./adminComponents/Sidebar.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();
const addProductToStock = document.getElementById("add-product");
addProductToStock.innerHTML = AddProduct();

const addProductToStockButton = document.getElementById("add-product-button");

addProductToStockButton.addEventListener("click", function () {
  const productToAdded = {
    // id: document.getElementById("id").value,
    brand: document.getElementById("admin-add-brand").value,
    description: document.getElementById("admin-add-description").value,
    price: document.getElementById("admin-add-price").value,
    imageUrl: document.getElementById("admin-add-imageUrl").value,
    features: document.getElementById("admin-add-features").value,
    stock: document.getElementById("admin-add-stock").value,
  };
  inventory.addProduct(productToAdded);
  console.log(inventory.products);
});
