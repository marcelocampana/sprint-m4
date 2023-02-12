//import BranchOffice from "../../classes/branchOffice.js";
import { EndPointApi } from "../../classes/endPointApi.js";
import ProductList from "./adminComponents/ProductList.js";
import Sidebar from "./adminComponents/Sidebar.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const productEndPoint = new EndPointApi("td-producto");
ProductList(productEndPoint.getRecord());

const deleteButton = document.querySelectorAll(".delete-button");
deleteButton.forEach((button) => {
  button.addEventListener("click", function () {
    /*  inventory.removeProduct(button.attributes.count.value);
    console.log(inventory.getAllProducts()); */
  });
});

//creacion de sucursal
/* const branchEndPoint = new EndPointApi("td-sucursal");
const branch = new BranchOffice(11, "Festina");
console.log(branch);

branchEndPoint.addRecord({ id: branch.id, nombre: branch.name }); */
