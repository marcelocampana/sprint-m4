import UpdateProduct from "../components/updateProduct.js";
import Sidebar from "../components/Sidebar.js";
import { EndPointApi } from "../../../classes/endPointApi.js";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const pageId = window.location.search.split("=");

const productEndPoint = new EndPointApi(`td-producto/${pageId[1]}`);

UpdateProduct(productEndPoint.getRecord());
