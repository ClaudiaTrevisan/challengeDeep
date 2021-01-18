import { ForecastBusiness } from "../src/business/ForecastBusinnes"
import { OutputForecast } from "../src/model/Forecast"

const getInfo = jest.fn((info: any) =>{ 
    return new OutputForecast (
    "test","test","test", 50, "test"
    );
})

describe("Get forecast", () =>{
    const forecastDatabaseFalsy = { getInfo: jest.fn((info: any) =>(null))} as any
    const forecastDatabaseTrue = getInfo as any
    
    test ("Error when parameter is empty", async () =>{
        expect.assertions(2)

        const forecastBusiness: ForecastBusiness = new ForecastBusiness (
            forecastDatabaseTrue
        );

        const info = ""

        try {
            await forecastBusiness.getForecast(info)

        } catch (error) {
            expect(error.message).toBe("Missing properties")  
            expect(error.code).toBe(422)
        }
    });

    test ("Error when return is empty", async () =>{
        expect.assertions(2)

        const forecastBusiness: ForecastBusiness = new ForecastBusiness (
            forecastDatabaseFalsy
        );

        const info = "test,ts"

        try {
            await forecastBusiness.getForecast(info)

        } catch (error) {
            expect(error.message).toBe("Not Found")  
            expect(error.code).toBe(404)
        }
    });

    test ("Success case", async () =>{
        expect.assertions(2)

        const forecastBusiness: ForecastBusiness = new ForecastBusiness (
            forecastDatabaseTrue
        );

        const info = "test,ts"

        try {
            await forecastBusiness.getForecast(info)

            expect(forecastDatabaseTrue.getInfo).toHaveBeenCalled()
            expect(forecastDatabaseTrue.getInfo).toHaveBeenCalledWith(info)

        } catch (error) {

        }
    });
})