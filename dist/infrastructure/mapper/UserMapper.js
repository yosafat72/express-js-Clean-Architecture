"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toPersistence(user) {
        const userModel = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        return userModel;
    }
    static toDomain(userModel) {
        const user = {
            id: userModel.id,
            name: userModel.name,
            email: userModel.email
        };
        return user;
    }
}
exports.UserMapper = UserMapper;
