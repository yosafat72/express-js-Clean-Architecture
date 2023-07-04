import { GenericResponse } from "../../../application/responses/GenericResponse";
import { User } from "../../models/User";

export interface CreateUserUsecase{
    execute(userData: any) : Promise<GenericResponse<User>>
}