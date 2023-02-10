import { inventory } from "../../utils/createInventory.js";
import ProductList from "./adminComponents/ProductList.js";
import Sidebar from "./adminComponents/Sidebar.js";
import deleteIcon from "../icons/delete.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const productList = document.getElementById("product-list");
productList.innerHTML = ProductList(inventory.getAllProducts());

const deleteButton = document.querySelectorAll(".delete-button");

deleteButton.forEach((button) => {
  button.addEventListener("click", function () {
    inventory.removeProduct(button.attributes.count.value);
    console.log(inventory.getAllProducts());
  });
});
