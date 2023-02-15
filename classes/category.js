import { EndPointApi } from "./endPointApi.js";

export default class Category {
  constructor(id, nombre) {
    this.id = id;
    this.name = nombre;
    this.endPoint = "td-categoria";
  }

  async getAllCategories() {
    const getCategoryFromApi = new EndPointApi(this.endPoint);
    const categories = await getCategoryFromApi.getRecords();
    const data = categories
      .filter((category) => category.id === 10 || category.id === 11)
      .map((category) => category);
    return data;
  }
}
