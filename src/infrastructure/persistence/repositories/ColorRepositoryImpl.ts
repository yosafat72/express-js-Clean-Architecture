import axios from 'axios';
import { Color } from '../../../domain/models/Color';
import { ColorRepository } from './../../../domain/repositories/ColorRepository';
import { ColorMapper } from '../mapper/ColorMapper';
import { ColorModel } from '../model/ColorModel';

export class ColorRepositoryImpl implements ColorRepository{

    async getColor(): Promise<Color[]> {
        const response = await axios.get('https://reqres.in/api/unknown');
        const transformedData: Color[] = response.data.data.map((sourceItem: ColorModel) => {
            const { id, name, year, color, pantone_value} = sourceItem;
            
            const destinationItem: Color = ColorMapper.toDomain(sourceItem);
            
                return destinationItem;
            });
        return transformedData
    }
    
}