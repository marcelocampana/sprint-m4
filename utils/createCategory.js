import Category from "../classes/category.js";
import { fechData } from "./fechData.js";

export const categoryData = fechData(
  "https://bsite.net/metalflap/td-categoria",
  {
    method: "GET",
  }
);

//export const category = {new Category("12", "lolo");}
