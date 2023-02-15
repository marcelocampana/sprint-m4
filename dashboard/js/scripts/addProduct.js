import AddProduct from "../components/AddProduct.js";
import Sidebar from "../components/Sidebar.js";
import Product from "../../../classes/product.js";

const products = new Product();

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const addProductToStock = document.getElementById("add-product");
addProductToStock.innerHTML = AddProduct();

function addRecordToAPi() {
  const addProductButton = document.getElementById("add-product-button");
  addProductButton.addEventListener("click", function () {
    const productToAdded = {
      id: 0,
      nombre: document.getElementById("add-name").value,
      precio: document.getElementById("add-price").value,
      link: document.getElementById("add-link").value,
      stock: parseInt(document.getElementById("add-stock").value),
      etiqueta: document.getElementById("add-label").value,
      descripcion: document.getElementById("add-description").value,
      idCategoria: parseInt(document.getElementById("add-category").value),
    };

    products.addProduct(productToAdded);
    /*   setTimeout(function () {
    window.location.href = "/dashboard/pages/index.html";
  }, 1000); */
  });
}

products.getAllProducts().then(() => addRecordToAPi());
