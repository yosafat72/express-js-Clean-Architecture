import { GenericResponse, createResponse } from './../../application/responses/GenericResponse';
import { Request, Response } from 'express';
import { UserService } from '../../application/usecases/UserService';
import { User } from '../../domain/models/User';
export class UserController{
    private userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    public fetchUser(req: Request, res: Response) : void{
        const result = this.userService.fetchUsers();
        result.subscribe({
            next: (data) => {
                data ? res.status(200).json(data) : res.status(404).json({ error: 'User not found' });
            },
            error: (_error) => {
                res.status(404).json({ error: 'User not found' });
            },
            complete: () => {

            }
        });
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const user = await this.userService.getUsers();

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;

        const newUser = await this.userService.createUser(userData);

        if (newUser) {
            res.status(200).json(newUser);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}