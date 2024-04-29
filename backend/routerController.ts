import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from './userController';

const router = Router();

// Rota para obter todos os usuários
router.get('/users', getUsers);
router.post('/createUser', createUser);
router.patch('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;
