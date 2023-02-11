import { fechData } from "../utils/fechData.js";
export let globalCategory;
export default class Category {
  constructor(id, nombre) {
    this.id = id;
    this.name = nombre;
  }
  getAllCategories() {
    this.categories = [];
    this.categories.push(this.id, this.name);
    console.log(this.categories);
    return this.categories;
  }
  addCategoryToApi() {
    fechData("https://bsite.net/metalflap/td-categoria", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(this.id, this.name),
    });
    return;
  }
  updateCategoryOnApi() {
    fechData("https://bsite.net/metalflap/td-categoria", {
      method: "PUT",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(this.id, this.name),
    });
    return;
  }
}
