import axios from 'axios';
import { network } from '../../config/AxiosConfig';
export class ColorApi{

    async getColor(){
        const response = await network({
            url: 'api/unknown',
            data: {},  
        });
        // const response = await axios.get('https://reqres.in/api/unknown');
        return response.data
    }
    
}