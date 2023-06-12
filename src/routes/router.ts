import { ColorController } from './../adapters/controllers/ColorController';
import express, { Router } from 'express';
import { UserController } from '../adapters/controllers/UserController';
import { validateUserInput } from '../adapters/middlewares/validation/UserValidation';

const router: Router = express.Router();

const userController = new UserController();
const colorController = new ColorController();

//User -> from database
router.get('/users', userController.getUser.bind(userController));
router.post('/users', validateUserInput, userController.createUser.bind(userController))
router.get('/rx/users', userController.fetchUser.bind(userController));
router.post('/rx/users', validateUserInput, userController.saveUser.bind(userController))

//Color -> from api
router.get('/colors', colorController.getColor.bind(colorController));

export default router;