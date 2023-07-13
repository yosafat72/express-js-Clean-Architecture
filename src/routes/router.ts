import { ColorController } from '../presentation/controllers/ColorController';
import express, { Router } from 'express';
import { validateUserInput } from '../presentation/middlewares/validation/UserValidation';

const router: Router = express.Router();

const colorController = new ColorController();

//Color -> from api
router.get('/colors', colorController.getColor.bind(colorController));

export default router;