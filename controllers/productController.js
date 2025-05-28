const productModel = require('../models/productModel');

exports.getProducts = (req, res) => {
  res.json(productModel.getAllProducts());
};

exports.getProductById = (req, res) => {
  const product = productModel.getProductById(parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' }); // Manejo de error
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }
  const newProduct = productModel.createProduct(name, price);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const product = productModel.getProductById(parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

  const updatedProduct = productModel.updateProduct(parseInt(req.params.id), req.body);
  res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
  const deletedProduct = productModel.deleteProduct(parseInt(req.params.id));
  if (!deletedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json({ message: 'Producto eliminado' });
};
