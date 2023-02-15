import Category from "../../../classes/category.js";
import { html } from "../../../utils/htmlRaw.js";

const categories = new Category().getAllCategories();

export default function AddProduct() {
  return html` <form class="mx-auto w-50 my-5">
    <h1 class="mt-3 ">Agregar producto</h1>
    <p class="mb-4">Ingresa los datos del producto a agregar</p>
    <div class="mb-3">
      <label for="add-name" class="form-label" disable>Nombre</label>
      <input type="text" class="form-control" id="add-name" required />
    </div>
    <div class="mb-3">
      <label for="add-price" class="form-label" disable>Precio</label>
      <input type="number" class="form-control" id="add-price" required />
    </div>
    <div class="mb-3">
      <label for="add-link" class="form-label">URL del imagen</label>
      <input type="text" class="form-control" id="add-link" required />
    </div>
    <div class="mb-3">
      <label for="add-stock" class="form-label" disable>Stock</label>
      <input type="number" class="form-control" id="add-stock" required />
    </div>
    <div class="mb-3">
      <label for="add-label" class="form-label">Etiqueta</label>
      <input type="text" class="form-control" id="add-label" required />
    </div>
    <div class="mb-3">
      <label for="add-category" class="form-label">Categoría</label>
      <select id="add-category" class="form-control">
        <option>Selecciona una categoria</option>
        ${categories.then((categories) => {
          const option = document.getElementById("add-category");
          categories.forEach((category) => {
            option.innerHTML += `<option value=${category.id}>${category.nombre}</option>`;
          });
        })}
      </select>
    </div>
    <div class="mb-3">
      <label for="add-description" class="form-label">Descripción</label>
      <textarea rows="3" class="form-control" id="add-description"></textarea>
    </div>

    <div class="col-12">
      <input
        type="button"
        class="btn btn-primary"
        id="add-product-button"
        value="Agregar producto"
      />
    </div>
  </form>`;
}
