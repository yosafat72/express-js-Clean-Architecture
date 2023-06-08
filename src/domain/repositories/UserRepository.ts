import { User } from '../models/User'

export interface UserRepository {

    getUsers(): Promise<User[]>
    createUser(userData: any): User

}