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
exports.ForecastDatabase = void 0;
const ParameterError_1 = require("../error/ParameterError");
const Forecast_1 = require("../model/Forecast");
const Basedatabase_1 = require("./Basedatabase");
class ForecastDatabase {
    constructor() {
        this.getInfo = (info) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultForecast = yield Basedatabase_1.getForecast(info);
                if (!resultForecast) {
                    throw new ParameterError_1.ParameterError("Algo deu errado", 401);
                }
                ;
                return Forecast_1.OutputForecast.toForecastModel(resultForecast.data.results);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ForecastDatabase = ForecastDatabase;
exports.default = new ForecastDatabase();
