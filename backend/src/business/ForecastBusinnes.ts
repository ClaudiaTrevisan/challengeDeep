import forecastDatabase, { ForecastDatabase } from "../data/ForecastDatabase";
import { ParameterError } from "../error/ParameterError";
import { OutputForecast } from "../model/Forecast";

export class ForecastBusiness {
    constructor (
        private forecastDatabase: ForecastDatabase
    ) {}

    public getForecast = async (city: string): Promise<OutputForecast> =>{
        try {
            if(!city){
                throw new ParameterError("Missing properties", 422);
            };

            const result = await this.forecastDatabase.getInfo(encodeURIComponent(city))

            if(!result || result.length <= 0){
                throw new ParameterError("Not Found", 404);
            };

            return result

        } catch (error) {
            throw new ParameterError(error.message, error.code);
        }
    };
}

export default new ForecastBusiness(forecastDatabase)