"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../adapters/controllers/UserController");
const router = express_1.default.Router();
const userController = new UserController_1.UserController();
router.get('/users', userController.getUser.bind(userController));
router.post('/users', userController.createUser.bind(userController));
exports.default = router;
