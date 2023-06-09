import { Color } from '../../domain/models/Color';
import { ColorRepositoryImpl } from '../../infrastructure/persistence/repositories/ColorRepositoryImpl';
import { ColorRepository } from './../../domain/repositories/ColorRepository';

export class ColorRepositoryAdapter implements ColorRepository{

    private colorRepository: ColorRepositoryImpl

    constructor(){
        this.colorRepository = new ColorRepositoryImpl();
    }

    async getColor(): Promise<Color[]> {
       return await this.colorRepository.getColor();
    }

}