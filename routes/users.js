// backend/routes/users.js
const express = require('express');
const router = express.Router();

let users = []; // Arreglo para almacenar los usuarios

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// Actualizar un usuario existente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => (user.id === id ? updatedUser : user));
  res.json(updatedUser);
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User deleted' });
});

module.exports = router;
