import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserRepositoryImpl } from "../../infrastructure/persistence/repositories/UserRepositoryImpl";

export class UserRepositoryAdapter implements UserRepository{

    private userRepository: UserRepositoryImpl;

    constructor(){
        this.userRepository = new UserRepositoryImpl();
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    createUser(userData: any): User {
        return this.userRepository.createUser(userData);
    }

    

}