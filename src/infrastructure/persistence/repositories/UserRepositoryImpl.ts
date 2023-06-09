import { User } from "../../../domain/models/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { PrismaClient, users } from "@prisma/client";
import { UserMapper } from "../mapper/UserMapper";

export class UserRepositoryImpl implements UserRepository{

    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
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

    createUser(userData: any): User {
        const user: User = {
            id: 1,
            name: "yosafat",
            email: "example@mail.com"
        }
        return user;
    }
    
}