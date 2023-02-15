import EndPointApi from "./endPointApi.js";

export default class Product {
  constructor() {
    this.idBranch = 4;
    this.products = [];
    this.endPoint = "td-producto";
  }
  async getProduct(productId) {
    const getProductFromApi = new EndPointApi(`${this.endPoint}/${productId}`);
    const products = await getProductFromApi.getRecords();
    const data = products.map((product) => product);
    return data;
  }

  async getAllProducts() {
    const getProductFromApi = new EndPointApi(this.endPoint);
    const products = await getProductFromApi.getRecords();
    const result = products.filter(
      (product) => product.idSucursal === this.idBranch
    );
    const data = result.map((product) => product);
    return data;
  }
  addProduct(product) {
    const endPointApi = new EndPointApi(this.endPoint);
    const data = { idSucursal: this.idBranch, ...product };
    console.log(data);
    endPointApi.addRecord(data);
  }

  updateProduct(product) {
    const endPointApi = new EndPointApi(this.endPoint);
    const data = { idSucursal: this.idBranch, ...product };
    endPointApi.addRecord(data);
  }
  deleteProduct(productId) {
    const endPointApi = new EndPointApi(`${this.endPoint}/${productId}`);
    endPointApi.deleteRecord(productId);
  }
}
