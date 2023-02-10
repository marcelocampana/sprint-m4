import { html } from "../../../utils/htmlRaw.js";
import updateIcon from "../../icons/update.js";
import deleteIcon from "../../icons/delete.js";

export default function ProductList(products) {
  return html` <div class="w-75 mx-auto mt-3">
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
      <tbody>
        ${products
          .map(
            (product, i) =>
              `<tr>
          <th scope="row">${i + 1}</th>
          <td><a href="update-product.html?id=${product.id}">${
                product.description
              }</a></td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td><a class="me-2" href="update-product.html?id=${
            product.id
          }">${updateIcon}</a><button class="border-0 bg-transparent delete-button" type="button" id="remove-product-button-${
                product.id
              }
              " count=${product.id}>${deleteIcon} </button>
    
    </button></td>
        </tr>`
          )
          .join("")}
      </tbody>
    </table>
  </div>`;
}
