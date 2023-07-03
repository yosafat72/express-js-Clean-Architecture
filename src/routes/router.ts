import { ColorController } from '../presentation/controllers/ColorController';
import express, { Router } from 'express';
import { UserController } from '../presentation/controllers/UserController';
import { validateUserInput } from '../presentation/middlewares/validation/UserValidation';

const router: Router = express.Router();

const userController = new UserController();
const colorController = new ColorController();

//User -> from database
router.get('/users', userController.getUser.bind(userController));
router.post('/users', validateUserInput, userController.createUser.bind(userController))

//Color -> from api
router.get('/colors', colorController.getColor.bind(colorController));

export default router;