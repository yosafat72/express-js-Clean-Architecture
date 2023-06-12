import { Observable } from "rxjs";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserRepositoryImpl } from "../../infrastructure/persistence/repositories/UserRepositoryImpl";

export class UserRepositoryAdapter implements UserRepository{

    private userRepository: UserRepositoryImpl;

    constructor(){
        this.userRepository = new UserRepositoryImpl();
    }
    fetchUsers(): Observable<User[]> {
        return this.userRepository.fetchUsers();
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    async createUser(userData: any): Promise<User>  {
        const io = await this.userRepository.createUser(userData);
        return io
    }

    

}