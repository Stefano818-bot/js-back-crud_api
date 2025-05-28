# CRUD Backend

Este es el backend de la aplicación CRUD desarrollado con Node.js y Express. Proporciona una API REST para gestionar usuarios y productos.

## Requisitos

- Node.js (versión 16 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Stefano818-bot/js-back-crud_api.git
   ```

2. Navega a la carpeta del proyecto:
   ```bash
   cd js-back-crud_api
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

1. Inicia el servidor:
   ```bash
   node index.js
   ```

2. El servidor estará disponible en:
   ```text
   http://localhost:3000
   ```

## Endpoints

### Usuarios
- `GET /usuarios`: Obtener todos los usuarios.
- `GET /usuarios/:id`: Obtener un usuario por ID.
- `POST /usuarios`: Crear un nuevo usuario.
- `PUT /usuarios/:id`: Actualizar un usuario existente.
- `DELETE /usuarios/:id`: Eliminar un usuario.

### Productos
- `GET /productos`: Obtener todos los productos.
- `GET /productos/:id`: Obtener un producto por ID.
- `POST /productos`: Crear un nuevo producto.
- `PUT /productos/:id`: Actualizar un producto existente.
- `DELETE /productos/:id`: Eliminar un producto.

## Notas

- Asegúrate de que el frontend esté corriendo en `http://localhost:5173` para interactuar con el backend.
- El frontend está disponible en el repositorio [js-front-crud](https://github.com/Stefano818-bot/js-front-crud).

## Tecnologías utilizadas

- Node.js
- Express
- Cors
- Body-parser
