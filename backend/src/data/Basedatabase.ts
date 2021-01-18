import axios from 'axios';

export const getForecast = async (city: string): Promise<any> =>{
    try{
        const result = await axios.get(
            `https://api.hgbrasil.com/weather?key=8b2833a5&city_name=${city}`
        );

        return result

    }catch(error) {
        console.log("bati aqui")
        throw new Error(error.message);
    }
};

  
