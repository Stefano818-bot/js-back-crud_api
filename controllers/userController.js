const userModel = require('../models/userModel');

exports.getUsers = (req, res) => {
  res.json(userModel.getAllUsers());
};

exports.getUserById = (req, res) => {
  const user = userModel.getUserById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
};

exports.createUser = (req, res) => {
  const { nombre, email, edad } = req.body;
  if (!nombre || !email || !edad) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }
  if (userModel.getAllUsers().some((u) => u.email === email)) {
    return res.status(400).json({ error: 'El email ya está en uso' });
  }
  const newUser = userModel.createUser(nombre, email, edad);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const user = userModel.getUserById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  const updatedUser = userModel.updateUser(parseInt(req.params.id), req.body);
  res.json(updatedUser);
};

exports.deleteUser = (req, res) => {
  const deletedUser = userModel.deleteUser(parseInt(req.params.id));
  if (!deletedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json({ message: 'Usuario eliminado' });
};
