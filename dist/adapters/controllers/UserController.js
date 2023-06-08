"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../../application/usecases/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUsers();
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        });
    }
    createUser(req, res) {
        const userData = req.body;
        const newUser = this.userService.createUser(userData);
        res.status(201).json(newUser);
    }
}
exports.UserController = UserController;
