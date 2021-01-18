import { ParameterError } from "../error/ParameterError";
import { OutputForecast } from "../model/Forecast";
import { getForecast } from "./Basedatabase";

export class ForecastDatabase {
    public getInfo = async (info: string): Promise<any> =>{
        try {
            const resultForecast = await getForecast(info)

            if(!resultForecast){
                throw new ParameterError("Algo deu errado", 401);
            };

            return OutputForecast.toForecastModel(resultForecast.data.results)

        } catch (error) {
            throw new Error(error.message);
        }
    };
}

export default new ForecastDatabase()