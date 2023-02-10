import { html } from "../../../utils/htmlRaw.js";

export default function AddProduct() {
  return html` <form class="mx-auto w-50 my-5">
    <h1 class="mt-3 ">Agregar producto</h1>
    <p class="mb-4">Ingresa los datos del producto a agregar</p>
    <div class="mb-3">
      <label for="admin-add-brand" class="form-label">Marca</label>
      <input type="text" class="form-control" id="admin-add-brand" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-description" class="form-label">Descripción</label>
      <input
        type="text"
        class="form-control"
        id="admin-add-description"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-add-imageUrl" class="form-label">URL del imagen</label>
      <input
        type="text"
        class="form-control"
        id="admin-add-imageUrl"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-add-price" class="form-label" disable>Precio</label>
      <input type="text" class="form-control" id="admin-add-price" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-stock" class="form-label">Stock</label>
      <input type="text" class="form-control" id="admin-add-stock" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-features" class="form-label">Características</label>
      <textarea
        rows="3"
        name="admin-add-features"
        class="form-control"
        id="admin-add-features"
        required
      ></textarea>
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
