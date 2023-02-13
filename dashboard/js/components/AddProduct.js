import { html } from "../../../utils/htmlRaw.js";

export default function AddProduct(productCategories) {
  console.log(productCategories);
  return html` <form class="mx-auto w-50 my-5">
    <h1 class="mt-3 ">Agregar producto</h1>
    <p class="mb-4">Ingresa los datos del producto a agregar</p>
    <div class="mb-3">
      <input type="hidden" class="form-control" id="admin-add-id" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-name" class="form-label" disable>Nombre</label>
      <input type="text" class="form-control" id="admin-add-name" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-price" class="form-label" disable>Precio</label>
      <input type="number" class="form-control" id="admin-add-price" required />
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
      <label for="admin-add-stock" class="form-label" disable>Stock</label>
      <input type="number" class="form-control" id="admin-add-stock" required />
    </div>
    <div class="mb-3">
      <label for="admin-add-label" class="form-label">Etiqueta</label>
      <input type="text" class="form-control" id="admin-add-label" required />
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
      <label for="admin-add-idcategory" class="form-label">Categoría</label>
      <input
        type="number"
        class="form-control"
        id="admin-add-idcategory"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-add-idsucursal" class="form-label">ID Sucursal</label>
      <input
        type="number"
        class="form-control"
        id="admin-add-idsucursal"
        required
      />
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

/*       <select class="form-control" id="admin-add-idcategory" required />

   ${productCategories.then((categories) => {
     console.log(categories);
     categories
       .filter((category) => category.id === 115 || category.id === 116)
       .forEach((item) => {
         console.log(item);
         const option = document.getElementById("admin-add-idcategory");
         option.value = item.id;
         option.text = item.nombre;
       });
   })}
      </select> */
