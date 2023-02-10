import { inventory } from "../../utils/createInventory.js";
import UpdateProduct from "./adminComponents/updateProduct.js";
import Sidebar from "./adminComponents/Sidebar.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const pageId = window.location.search.split("=");
console.log(pageId[1]);

const updateProduct = document.getElementById("update-product");
updateProduct.innerHTML = UpdateProduct(
  inventory.getProduct(parseInt(pageId[1]))
);

const addProductButton = document.getElementById("update-product-button");
addProductButton.addEventListener("click", function () {
  const updatedProduct = {
    id: parseInt(document.getElementById("admin-update-id").value),
    brand: document.getElementById("admin-update-brand").value,
    description: document.getElementById("admin-update-description").value,
    price: document.getElementById("admin-update-price").value,
    imageUrl: document.getElementById("admin-update-imageUrl").value,
    features: document.getElementById("admin-update-features").value,
    stock: document.getElementById("admin-update-stock").value,
  };

  inventory.updateProduct(updatedProduct.id, updatedProduct);
});
