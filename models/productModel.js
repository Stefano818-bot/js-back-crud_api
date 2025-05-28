let productos = [];
let idCounter = 1;

const getAllProducts = () => productos;

const getProductById = (id) => productos.find((product) => product.id === id);

const createProduct = (name, price) => {
  const newProduct = { id: idCounter++, name, price };
  productos.push(newProduct);
  return newProduct;
};

const updateProduct = (id, data) => {
  const product = getProductById(id);
  if (product) {
    Object.assign(product, data);
  }
  return product;
};

const deleteProduct = (id) => {
  const product = getProductById(id);
  if (product) {
    productos = productos.filter((p) => p.id !== id);
  }
  return product;
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
