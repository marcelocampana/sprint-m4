import { fechData } from "../../classes/category.js";

fechData("https://bsite.net/metalflap/td-producto");

/* getData("https://bsite.net/metalflap/td-categoria", {
  method: "POST",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify({
    id: 3,
    nombre: "PRUEBA4",
  }),
}); */

fechData("https://bsite.net/metalflap/td-categoria", {
  method: "PUT",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify({
    id: 4,
    nombre: "MOD",
  }),
});

fechData("https://bsite.net/metalflap/td-categoria/5", {
  method: "DELETE",
  headers: { "Content-type": "application/json;charset=UTF-8" },
});
