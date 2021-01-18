"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ForecastBusinnes_1 = require("../src/business/ForecastBusinnes");
const Forecast_1 = require("../src/model/Forecast");
const getInfo = jest.fn((info) => {
    return new Forecast_1.OutputForecast("test", "test", "test", 50, 50, "test");
});
describe("Get forecast", () => {
    const forecastDatabaseFalsy = { getInfo: jest.fn((info) => (null)) };
    const forecastDatabaseTrue = getInfo;
    test("Error when parameter is empty", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const forecastBusiness = new ForecastBusinnes_1.ForecastBusiness(forecastDatabaseTrue);
        const info = "";
        try {
            yield forecastBusiness.getForecast(info);
        }
        catch (error) {
            expect(error.message).toBe("Missing properties");
            expect(error.code).toBe(422);
        }
    }));
    test("Error when return is empty", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const forecastBusiness = new ForecastBusinnes_1.ForecastBusiness(forecastDatabaseFalsy);
        const info = "test,ts";
        try {
            yield forecastBusiness.getForecast(info);
        }
        catch (error) {
            expect(error.message).toBe("Not Found");
            expect(error.code).toBe(404);
        }
    }));
    test("Success case", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const forecastBusiness = new ForecastBusinnes_1.ForecastBusiness(forecastDatabaseTrue);
        const info = "test,ts";
        try {
            yield forecastBusiness.getForecast(info);
            expect(forecastDatabaseTrue.getInfo).toHaveBeenCalled();
            expect(forecastDatabaseTrue.getInfo).toHaveBeenCalledWith(info);
        }
        catch (error) {
        }
    }));
});
