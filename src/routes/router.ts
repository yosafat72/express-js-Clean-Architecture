import express, { Request, Response, Router } from 'express';
import { UserController } from '../adapters/controllers/UserController';
import { validateUserInput } from '../adapters/middlewares/validation/UserValidation';

const router: Router = express.Router();

const userController = new UserController();

router.get('/users', userController.getUser.bind(userController));
router.post('/users', validateUserInput, userController.createUser.bind(userController))

export default router;