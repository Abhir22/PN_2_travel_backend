import express from 'express';
import { UsersController } from '../app/api/v1/controllers/users.controller.js';
const router = express.Router();
const usersController = new UsersController();

// Public routes
router.post('/login', usersController.login);
router.post('/users', usersController.createUser);

// Protected routes
// router.use(authMiddleware);
router.get('/users', usersController.getUsers);
router.get('/users/paginated', usersController.getPaginatedUsers);
router.get('/users/:id', usersController.getUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

export default router; 