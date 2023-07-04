import { GenericResponse } from "../../../application/responses/GenericResponse";
import { User } from "../../models/User";

export interface GetUsersUsecase{
    execute() : Promise<GenericResponse<User[]>>
}