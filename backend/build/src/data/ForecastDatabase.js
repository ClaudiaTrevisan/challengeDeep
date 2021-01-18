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
const Forecast_1 = require("../model/Forecast");
const Basedatabase_1 = require("./Basedatabase");
class ForecastDatabase extends Basedatabase_1.Basedatabase {
    constructor() {
        super(...arguments);
        this.getInfo = (info) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultForecast = yield this.getConnection(info);
                return Forecast_1.OutputForecast.toForecastModel(resultForecast.results);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ForecastDatabase = ForecastDatabase;
exports.default = new ForecastDatabase();
