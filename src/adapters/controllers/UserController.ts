import { Request, Response } from 'express';
import { UserService } from '../../application/usecases/UserService';
import { validateEmail } from '../../infrastructure/utility/EmailValidator';

export class UserController{
    private userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const user = await this.userService.getUsers();

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    public createUser(req: Request, res: Response): void {
        if(!validateEmail(req.body.email)){
            res.status(400).json({ error: 'Email is not valid' });
            return
        }

        const userData = req.body;
        const newUser = this.userService.createUser(userData);

        res.status(201).json(newUser);
    }

}