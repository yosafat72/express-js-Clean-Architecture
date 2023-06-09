import { User } from "../../../domain/models/User";
import { UserModel } from "../model/UserModel";

export class UserMapper {

    public static toPersistence(user: User) : UserModel{
        const userModel: UserModel = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        return userModel
    }

    public static toDomain(userModel: UserModel): User {
        const user: User = {
            id: userModel.id,
            name: userModel.name,
            email: userModel.email
        }
        return user
    }

}