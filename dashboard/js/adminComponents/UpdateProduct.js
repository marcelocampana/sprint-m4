import { html } from "../../../utils/htmlRaw.js";

export default function UpdateProduct(product) {
  return html` <form class="mx-auto w-50 my-5">
    <h1 class="mt-3 ">Modificar producto</h1>
    <p class="mb-4">Ingresa los datos a modificar</p>
    <div class="mb-3">
      <label for="admin-update-id" class="form-label">ID</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-id"
        value="${product.id}"
        disabled
      />
      <label for="admin-update-brand" class="form-label">Marca</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-brand"
        value="${product.brand}"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-description" class="form-label"
        >Descripción</label
      >
      <input
        type="text"
        class="form-control"
        id="admin-update-description"
        value="${product.description}"
        required
      />
    </div>

    <div class="mb-3">
      <label for="admin-update-imageUrl" class="form-label"
        >URL del imagen</label
      >
      <input
        type="text"
        class="form-control"
        id="admin-update-imageUrl"
        value="${product.imageUrl}"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-price" class="form-label" disable>Precio</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-price"
        value="${product.price}"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-stock" class="form-label">Stock</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-stock"
        value="${product.stock}"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-features" class="form-label">Stock</label>
      <textarea
        rows="3"
        name="admin-update-features"
        class="form-control"
        id="admin-update-features"
      >
${product.features}</textarea
      >
    </div>
    <div class="col-12">
      <button type="button" class="btn btn-primary" id="update-product-button">
        Modificar
      </button>
    </div>
  </form>`;
}
