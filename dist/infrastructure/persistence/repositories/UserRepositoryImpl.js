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
exports.UserRepositoryImpl = void 0;
const client_1 = require("@prisma/client");
class UserRepositoryImpl {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.prisma.users.findMany();
            const transformedData = users.map((sourceItem) => {
                const { id, name, email } = sourceItem;
                const destinationItem = {
                    id: id,
                    name: name,
                    email: email
                };
                return destinationItem;
            });
            return transformedData;
        });
    }
    createUser(userData) {
        const user = {
            id: 1,
            name: "yosafat",
            email: "example@mail.com"
        };
        return user;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
