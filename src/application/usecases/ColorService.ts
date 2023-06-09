import { ColorRepositoryAdapter } from "../../adapters/repositories/ColorRepositoryAdapter";
import { Color } from "../../domain/models/Color";
import { ColorRepository } from "../../domain/repositories/ColorRepository";
import { GenericResponse } from "../responses/GenericResponse";

export class ColorService{

    private colorRepository: ColorRepository;

    constructor(){
        this.colorRepository = new ColorRepositoryAdapter();
    }

    public async getColors() : Promise<GenericResponse<Color[]>>{
        try {
            const result = await this.colorRepository.getColor();
            return{
                success: true,
                message: 'Success to get colors.',
                data: result
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to get colors.',
            };
        }
    }

}