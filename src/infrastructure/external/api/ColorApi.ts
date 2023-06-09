import axios from 'axios';

export class ColorApi{

    async getColor(){
        const response = await axios.get('https://reqres.in/api/unknown');
        return response.data
    }
    
}