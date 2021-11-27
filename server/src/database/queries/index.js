const {
  newFavorites,
  getAllProducts,
  findProductById,
  postProductQuery,
  deleteProductQuery,
  getLandingProducts,
  profileProductsQuery,
  searchProductsQuery,
  publishProductQuery,
  getProductsBySection,
  getDashboardProductsQuery,
} = require('./products');

const {
  findFavById,
  deleteFav,
} = require('./favourites');

const {
  addNewUser,
  checkAccount,
  findUserById,
  removeUserQuery,
  getAllUsersQuery,
} = require('./users');

module.exports = {
  deleteFav,
  addNewUser,
  findFavById,
  checkAccount,
  newFavorites,
  findUserById,
  getAllProducts,
  removeUserQuery,
  findProductById,
  getAllUsersQuery,
  postProductQuery,
  getLandingProducts,
  profileProductsQuery,
  publishProductQuery,
  searchProductsQuery,
  getProductsBySection,
  deleteProductQuery,
  getDashboardProductsQuery,
};
