import { UserRepositoryAdapter } from "../../../adapters/repositories/UserRepositoryAdapter";
import { User } from "../../../domain/models/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { CreateUserUsecase } from "../../../domain/usecase/user/CreateUserUsecase";
import { GenericResponse } from "../../responses/GenericResponse";

export class CreateUserUsecaseImpl implements CreateUserUsecase{

    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryAdapter();
    }

    async execute(userData: any): Promise<GenericResponse<User>> {
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