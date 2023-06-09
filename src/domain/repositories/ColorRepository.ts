import { Color } from "../models/Color";

export interface ColorRepository{

    getColor() : Promise<Color[]>

}