import express, { Request, Response, Router } from 'express';
import { UserController } from '../adapters/controllers/UserController';

const router: Router = express.Router();

const userController = new UserController();

router.get('/users', userController.getUser.bind(userController));
router.post('/users', userController.createUser.bind(userController))

export default router;