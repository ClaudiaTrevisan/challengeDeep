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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastBusiness = void 0;
const ForecastDatabase_1 = __importDefault(require("../data/ForecastDatabase"));
const ParameterError_1 = require("../error/ParameterError");
class ForecastBusiness {
    constructor(forecastDatabase) {
        this.forecastDatabase = forecastDatabase;
        this.getForecast = (city) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!city) {
                    throw new ParameterError_1.ParameterError("Missing properties", 422);
                }
                ;
                const result = yield this.forecastDatabase.getInfo(encodeURIComponent(city));
                if (!result || result.length <= 0) {
                    throw new ParameterError_1.ParameterError("Not Found", 404);
                }
                ;
                return result;
            }
            catch (error) {
                throw new ParameterError_1.ParameterError(error.message, error.code);
            }
        });
    }
}
exports.ForecastBusiness = ForecastBusiness;
exports.default = new ForecastBusiness(ForecastDatabase_1.default);
