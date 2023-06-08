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
exports.UserRepositoryAdapter = void 0;
const UserRepositoryImpl_1 = require("../../infrastructure/persistence/repositories/UserRepositoryImpl");
class UserRepositoryAdapter {
    constructor() {
        this.userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUsers();
        });
    }
    createUser(userData) {
        return this.userRepository.createUser(userData);
    }
}
exports.UserRepositoryAdapter = UserRepositoryAdapter;
