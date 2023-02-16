import Product from "../../../classes/product.js";
import ProductList from "../components/ProductList.js";
import Sidebar from "../components/Sidebar.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const products = new Product();

ProductList(products.getAllProducts());

function deleteRecord() {
  const deleteButton = document.querySelectorAll(".delete-button");

  deleteButton.forEach((button) => {
    button.addEventListener("click", function () {
      const userOtion = confirm(
        `Esta acción eliminará el producto con ID ${button.attributes.count.value}`
      );

      if (userOtion) {
        products.deleteProduct(button.attributes.count.value);
        const producTable = document.getElementById("product-table");
        const childToDelete = document.getElementById(
          `tr--${button.attributes.count.value}`
        );
        producTable.removeChild(childToDelete);
      }
    });
  });
}

products.getAllProducts().then(() => deleteRecord());
