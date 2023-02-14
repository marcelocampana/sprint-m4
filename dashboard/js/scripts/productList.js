import { EndPointApi } from "../../../classes/endPointApi.js";
import ProductList from "../components/ProductList.js";
import Sidebar from "../components/Sidebar.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const productEndPoint = new EndPointApi("td-producto");

ProductList(productEndPoint.getRecord());

function deleteRecord() {
  const deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((button) => {
    button.addEventListener("click", function () {
      const productEndPoint = new EndPointApi(
        `td-producto/${button.attributes.count.value}`
      );
      productEndPoint.deleteRecord(button.attributes.count.value);
      const producTable = document.getElementById("product-table");
      const childToDelete = document.getElementById(
        `tr--${button.attributes.count.value}`
      );
      producTable.removeChild(childToDelete);
    });
  });
}

productEndPoint.getRecord().then(() => deleteRecord());

//creacion de sucursal
/* const branchEndPoint = new EndPointApi("td-sucursal");
const branch = new BranchOffice(11, "Festina");
console.log(branch);

branchEndPoint.addRecord({ id: branch.id, nombre: branch.name }); */
