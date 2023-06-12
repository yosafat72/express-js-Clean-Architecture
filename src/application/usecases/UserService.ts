import { Observable, map } from "rxjs";
import { UserRepositoryAdapter } from "../../adapters/repositories/UserRepositoryAdapter";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { GenericResponse, createResponse } from "../responses/GenericResponse";
import { UserMapper } from "../../infrastructure/persistence/mapper/UserMapper";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryAdapter();
    }

    public saveUser(userData: any): Observable<GenericResponse<User>>{
        return new Observable<GenericResponse<User>>(subscribe => {
            const result = this.userRepository.saveUser(userData);
            result.pipe(
                map((user: User) => {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                })
            ).subscribe({
                next: (data) => {
                    return subscribe.next(createResponse(true, 'Success to saving data', data));
                },
                error: (error) => {
                    return subscribe.error(createResponse(false, 'Failed to saving data', error))
                },
                complete: () => {
                    return subscribe.complete();
                }
            })
        })
    }

    public fetchUsers(): Observable<GenericResponse<User[]>>{
        return new Observable<GenericResponse<User[]>>(subscribe => {
            const result = this.userRepository.fetchUsers();
            result.pipe(
                map((users: User[]) => {
                    return users.map((user: User) => {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                })
            ).subscribe({
                next: (data) => {
                    return subscribe.next(createResponse(true, 'Success to get users.', data));
                },
                error: (error) => {
                    return subscribe.error(createResponse(false, 'Failed to get users.', error))
                },
                complete: () => {
                    return subscribe.complete();
                }
            });
        })
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