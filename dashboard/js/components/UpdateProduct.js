import { html } from "../../../utils/htmlRaw.js";
import { EndPointApi } from "../../../classes/endPointApi.js";
import Category from "../../../classes/category.js";

const categories = new Category().getAllCategories();

export default function UpdateProduct(product) {
  product.then((product) => {
    console.log(product);
    const htmlUpdateProduct = html` <form class="mx-auto w-50 my-5">
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
        <label for="update-description" class="form-label">Descripción</label>
        <textarea rows="3" class="form-control" id="update-description">
${product[0].descripcion}</textarea
        >
      </div>
      <div class="mb-3">
        <label for="update-id-category" class="form-label">Categoría</label>
        <select id="update-id-category" class="form-control">
          ${categories.then((categories) => {
            const option = document.getElementById("update-id-category");
            categories.forEach((category) => {
              console.log(product[0].idCategoria, category.id);
              option.innerHTML += `<option value=${category.id} ${
                category.id === product[0].idCategoria && "selected='selected'"
              }>${category.nombre}</option>`;
            });
          })}
        </select>
      </div>
      <div class="mb-3">
        <label for="update-id-branch" class="form-label">Sucursal</label>
        <input
          type="text"
          class="form-control"
          id="update-id-branch"
          value="${product[0].idSucursal}"
          disabled
        />
      </div>
      <div class="col-12" id="button-position"></div>
    </form>`;

    const updateProduct = document.getElementById("update-product");
    updateProduct.innerHTML = htmlUpdateProduct;

    const button = document.createElement("button");
    button.setAttribute("id", "update-product-button");
    button.setAttribute("type", "button");
    button.className = "btn btn-primary";
    button.innerText = "Modificar";

    const buttonPosition = document.getElementById("button-position");
    buttonPosition.appendChild(button);

    const addProductButton = document.getElementById("update-product-button");
    addProductButton.addEventListener("click", function () {
      const updatedProduct = {
        id: parseInt(document.getElementById("update-id").value),
        nombre: document.getElementById("update-name").value,
        precio: document.getElementById("update-price").value,
        link: document.getElementById("update-link").value,
        stock: parseInt(document.getElementById("update-stock").value),
        etiqueta: document.getElementById("update-label").value,
        descripcion: document.getElementById("update-description").value,
        idCategoria: parseInt(
          document.getElementById("update-id-category").value
        ),
        idSucursal: parseInt(document.getElementById("update-id-branch").value),
      };

      const productEndPoint = new EndPointApi("td-producto");
      productEndPoint.updateRecord(updatedProduct);
      /*    setTimeout(function () {
        window.location.href = "/dashboard/pages/index.html";
      }, 1000); */
    });
  });
}
