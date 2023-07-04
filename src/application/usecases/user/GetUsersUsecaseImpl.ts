import { UserRepositoryAdapter } from '../../../adapters/repositories/UserRepositoryAdapter';
import { User } from '../../../domain/models/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { GenericResponse } from '../../responses/GenericResponse';
import { GetUsersUsecase } from './../../../domain/usecase/user/GetUsersUsecase';

export class GetUsersUsecaseImpl implements GetUsersUsecase{

    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryAdapter();
    }

    async execute(): Promise<GenericResponse<User[]>> {
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

}