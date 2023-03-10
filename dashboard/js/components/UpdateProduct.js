import { html } from "../../../utils/htmlRaw.js";
import Category from "../../../classes/category.js";

const categories = new Category().getAllCategories();

export default function UpdateProduct(product) {
  product.then((product) => {
    const htmlRendered = html` <form class="mx-auto w-50 my-5">
      <h1 class="mt-3 ">Modificar producto</h1>
      <p class="mb-4">Ingresa los datos a modificar</p>

      <div class="mb-3">
        <label for="update-id" class="form-label">ID</label>
        <input
          type="text"
          class="form-control"
          id="update-id"
          value="${product[0].id}"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="update-name" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="update-name"
          value="${product[0].nombre}"
          required
        />
      </div>
      <div class="mb-3">
        <label for="update-price" class="form-label">Precio</label>
        <input
          type="text"
          class="form-control"
          id="update-price"
          value="${product[0].precio}"
          required
        />
      </div>

      <div class="mb-3">
        <label for="update-link" class="form-label">URL del imagen</label>
        <input
          type="text"
          class="form-control"
          id="update-link"
          value="${product[0].link}"
          required
        />
      </div>
      <div class="mb-3">
        <label for="update-stock" class="form-label" disable>Stock</label>
        <input
          type="text"
          class="form-control"
          id="update-stock"
          value="${parseInt(product[0].stock)}"
          required
        />
      </div>
      <div class="mb-3">
        <label for="update-label" class="form-label">Etiqueta</label>
        <input
          type="text"
          class="form-control"
          id="update-label"
          value="${product[0].etiqueta}"
          required
        />
      </div>
      <div class="mb-3">
        <label for="update-category" class="form-label">Categor??a</label>
        <select id="update-category" class="form-control">
          ${categories.then((categories) => {
            const option = document.getElementById("update-category");
            categories.forEach((category) => {
              //   console.log(product[0].idCategoria, category.id);
              option.innerHTML += `<option value=${category.id} ${
                category.id === product[0].idCategoria && "selected='selected'"
              }>${category.nombre}</option>`;
            });
          })}
        </select>
      </div>
      <div class="mb-3">
        <label for="update-description" class="form-label">Descripci??n</label>
        <textarea rows="3" class="form-control" id="update-description">
${product[0].descripcion}</textarea
        >
      </div>

      <div class="col-12">
        <input
          type="button"
          class="btn btn-primary"
          id="update-product-button"
          value="Modificar producto"
        />
      </div>
    </form>`;
    document.getElementById("update-product").innerHTML = htmlRendered;
  });
}
