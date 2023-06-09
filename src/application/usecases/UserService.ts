import { UserRepositoryAdapter } from "../../adapters/repositories/UserRepositoryAdapter";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { GenericResponse } from "../responses/GenericResponse";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryAdapter();
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