import { Observable } from 'rxjs'
import { User } from '../models/User'

export interface UserRepository {

    getUsers(): Promise<User[]>
    createUser(userData: any): Promise<User>
    fetchUsers(): Observable<User[]>

}