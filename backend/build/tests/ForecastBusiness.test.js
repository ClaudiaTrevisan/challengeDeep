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
describe("Get forecast", () => {
    const forecastDatabase = { getInfo: jest.fn() };
    test("Error when parameter is empty", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const forecastBusiness = new ForecastBusinnes_1.ForecastBusiness(forecastDatabase);
        const info = "";
        try {
            yield forecastBusiness.getForecast(info);
        }
        catch (error) {
            expect(error.message).toBe("Missing properties");
            expect(error.code).toBe(422);
        }
    }));
});
