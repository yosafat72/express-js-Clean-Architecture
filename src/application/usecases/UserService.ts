import { Observable } from "rxjs";
import { UserRepositoryAdapter } from "../../adapters/repositories/UserRepositoryAdapter";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { GenericResponse } from "../responses/GenericResponse";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryAdapter();
    }

    public fetchUsers(): Observable<User[]>{
        try {
            const result = this.userRepository.fetchUsers();
            return result
        } catch (error) {
            return new Observable<User[]>
        }
    }

    public async getUsers(): Promise<GenericResponse<User[]>>{
        try {
            const result = await this.userRepository.getUsers();
            return{
                success: true,
                message: 'Success to get users.',
                data: result
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to get users.',
            };
        }
    }

    public async createUser(userData: any): Promise<GenericResponse<User>> {
        try {
            const result = await this.userRepository.createUser(userData);
            return{
                success: true,
                message: 'Success to saving data',
                data: result
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to saving data',
            };
        }
      }
}