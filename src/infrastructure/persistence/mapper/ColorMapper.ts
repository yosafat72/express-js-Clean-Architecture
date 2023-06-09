import { Color } from "../../../domain/models/Color";
import { ColorModel } from "../model/ColorModel";

export class ColorMapper {

    public static toPersistence(color: Color) : ColorModel{
        const colorModel: ColorModel = {
            id: color.id,
            name: color.name,
            year: color.year,
            color: color.color,
            pantone_value: color.pantoneValue
        }
        return colorModel
    }

    public static toDomain(colorModel: ColorModel): Color {
        const color: Color = {
            id: colorModel.id,
            name: colorModel.name,
            year: colorModel.year,
            color: colorModel.color,
            pantoneValue: colorModel.pantone_value
        }
        return color
    }

}