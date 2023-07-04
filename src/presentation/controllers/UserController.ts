import { Request, Response } from 'express';
import { GetUsersUsecase } from '../../domain/usecase/user/GetUsersUsecase';
import { GetUsersUsecaseImpl } from '../../application/usecases/user/GetUsersUsecaseImpl';
import { CreateUserUsecase } from '../../domain/usecase/user/CreateUserUsecase';
import { CreateUserUsecaseImpl } from '../../application/usecases/user/CreateUserUsecaseImpl';

export class UserController{
    private getUsersUsecase : GetUsersUsecase
    private createUserUsecase : CreateUserUsecase

    constructor(){
        this.getUsersUsecase = new GetUsersUsecaseImpl()
        this.createUserUsecase = new CreateUserUsecaseImpl()
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const user = await this.getUsersUsecase.execute()

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;

        const newUser = await this.createUserUsecase.execute(userData)

        if (newUser) {
            res.status(200).json(newUser);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}