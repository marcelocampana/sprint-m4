import { html } from "../../../utils/htmlRaw.js";
import updateIcon from "../../icons/update.js";
import deleteIcon from "../../icons/delete.js";

export default function ProductList(productData) {
  productData.then((products) => {
    const htmlList = html`<div class="w-75 mx-auto mt-3">
      <table class="table table-striped ms-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody id="product-table">
          ${products
            .filter((product) => product.idSucursal === 11)
            .map(
              (product, i) =>
                `<tr id="tr--${product.id}">
          <th scope="row">${i + 1}</th>
          <td><a href="update-product.html?id=${product.id}">${
                  product.nombre
                }</a></td>
          <td>${product.precio}</td>
          <td>${product.stock}</td>
          <td class="d-flex"><div><a class="me-2" href="update-product.html?id=${
            product.id
          }">${updateIcon}</a>
          </div>
          <div id="button-delete">
          <button class="border-0 bg-transparent delete-button" type="button" id="remove-product-button-${
            product.id
          }
              " count=${product.id}>${deleteIcon} </button>
    
    </button></div></td>
        </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;

    const productList = document.getElementById("product-list");
    productList.innerHTML = htmlList;
  });
}
