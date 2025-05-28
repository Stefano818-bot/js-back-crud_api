let usuarios = [];
let idCounter = 1;

const getAllUsers = () => usuarios;

const getUserById = (id) => usuarios.find((user) => user.id === id);

const createUser = (nombre, email, edad) => {
  const newUser = { id: idCounter++, nombre, email, edad };
  usuarios.push(newUser);
  return newUser;
};

const updateUser = (id, data) => {
  const user = getUserById(id);
  if (user) {
    Object.assign(user, data);
  }
  return user;
};

const deleteUser = (id) => {
  const user = getUserById(id);
  if (user) {
    usuarios = usuarios.filter((u) => u.id !== id);
  }
  return user;
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
