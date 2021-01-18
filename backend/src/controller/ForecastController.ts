import forecastBusinnes, { ForecastBusiness } from "../business/ForecastBusinnes";
import { Request, Response } from "express";
import { OutputForecast } from "../model/Forecast";


export class ForecastController {
    constructor (
        private forecastBusiness: ForecastBusiness
    ) {}

    public getForecast = async (req: Request, res: Response): Promise<void> =>{
        try {
            const city: string = req.query.city as string

            const result: OutputForecast = await this.forecastBusiness.getForecast(city)

            res.status(200)
            .send(result)

        } catch (error) {
            const { code, message } = error;
            res.status(code || 400).send({ message });
        }
    };
}

export default new ForecastController(forecastBusinnes)