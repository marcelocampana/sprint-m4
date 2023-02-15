import AddProduct from "../components/AddProduct.js";
import Sidebar from "../components/Sidebar.js";
import Product from "../../../classes/product.js";
import { EndPointApi } from "../../../classes/endPointApi.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();
const addProductToStock = document.getElementById("add-product");
const categoryEndpoint = new EndPointApi("td-categoria");
addProductToStock.innerHTML = AddProduct(categoryEndpoint.getRecords());

// Obtner datos ingresados en el formulario
let newProduct;
let inputValue = document.getElementsByClassName("form-control");
let sendButton = document.getElementById("add-product-button");

sendButton.addEventListener("click", sendProduct);

function sendProduct() {
  let productData = [];
  for (let i = 0; i < inputValue.length; i++) {
    productData.push(inputValue[i].value);
  }
  newProduct = new Product(
    parseInt(productData[0]),
    productData[1],
    parseInt(productData[2]),
    productData[3],
    parseInt(productData[4]),
    productData[5],
    productData[6],
    parseInt(productData[7]),
    parseInt(productData[8])
  );
  // console.log(newProduct);
  newProduct.sendData();
  /*   setTimeout(function () {
    window.location.href = "/dashboard/pages/index.html";
  }, 1000); */
}
