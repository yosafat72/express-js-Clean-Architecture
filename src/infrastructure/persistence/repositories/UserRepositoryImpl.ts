import { User } from "../../../domain/models/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { PrismaClient, users } from "@prisma/client";
import { UserMapper } from "../mapper/UserMapper";
import { Observable, from } from "rxjs";

export class UserRepositoryImpl implements UserRepository{

    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    saveUser(userData: any): Observable<User> {

        const newUserData = UserMapper.toPersistence(userData);

        const result = from(this.prisma.users.create({
            data: {
                "name" : newUserData.name,
                "email" : newUserData.email
            }
        }))

        return result;

    }

    fetchUsers(): Observable<User[]> {
        const users = this.prisma.users.findMany();
        return from(users);
    }

    async getUsers(): Promise<User[]> {
        const users = await this.prisma.users.findMany();

        const transformedData: User[] = users.map((sourceItem) => {
            const { id, name, email } = sourceItem;
            
            const destinationItem: User = UserMapper.toDomain(sourceItem);
            
                return destinationItem;
            });
        return transformedData
    }

    async createUser(userData: any): Promise<User> {
        const newUserData = UserMapper.toPersistence(userData);

        const result = await this.prisma.users.create({
            data: {
                "name" : newUserData.name,
                "email" : newUserData.email
            }
        })

        return UserMapper.toDomain(result);
    }
    
}