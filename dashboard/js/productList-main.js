import { inventory } from "../../utils/createInventory.js";
import ProductList from "./adminComponents/ProductList.js";
import Sidebar from "./adminComponents/Sidebar.js";
import { fechData } from "../../utils/fechData.js";
//import { category } from "../../utils/createCategory.js";
import { categoryData } from "../../utils/createCategory.js";
import Category from "../../classes/category.js";

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

fechData("https://bsite.net/metalflap/td-categoria", { method: "GET" });

/* getData("https://bsite.net/metalflap/td-categoria", {
  method: "POST",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify({
    id: 3,
    nombre: "PRUEBA4",
  }),
}); */

/* fechData("https://bsite.net/metalflap/td-categoria", {
  method: "PUT",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify({
    id: 4,
    nombre: "MOD",
  }),
});*/

/* for (let i = 71; i <= 120; i++) {
  fechData(`https://bsite.net/metalflap/td-categoria/${i}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
}
 */
