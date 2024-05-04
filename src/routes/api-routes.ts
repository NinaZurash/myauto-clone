const API_URL = process.env.API_URL;
const API_URL_MAN = process.env.API_URL_MAN;

export const API_ROUTES = {
  products: API_URL + "/products",
  categories: API_URL + "/cats/get",
  manufacturers: API_URL_MAN,
};
