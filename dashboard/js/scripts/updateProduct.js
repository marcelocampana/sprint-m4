import UpdateProduct from "../components/updateProduct.js";
import Sidebar from "../components/Sidebar.js";
import Product from "../../../classes/product.js";

const products = new Product();
const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const pageId = window.location.search.split("=");

UpdateProduct(products.getProduct(pageId[1]));

function updateProductOnAPi() {
  const updateProductButton = document.getElementById("update-product-button");
  updateProductButton.addEventListener("click", function () {
    const updatedProduct = {
      id: parseInt(document.getElementById("update-id").value),
      nombre: document.getElementById("update-name").value,
      precio: document.getElementById("update-price").value,
      link: document.getElementById("update-link").value,
      stock: parseInt(document.getElementById("update-stock").value),
      etiqueta: document.getElementById("update-label").value,
      descripcion: document.getElementById("update-description").value,
      idCategoria: parseInt(document.getElementById("update-category").value),
    };

    products.updateProduct(updatedProduct);

    setTimeout(function () {
      window.location.href = "/dashboard/pages/index.html";
    }, 1000);
  });
}

products.getProduct(pageId[1]).then(() => updateProductOnAPi());
