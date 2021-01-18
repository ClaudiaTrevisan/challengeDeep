"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecastRouter = void 0;
const express_1 = __importDefault(require("express"));
const ForecastController_1 = __importDefault(require("../controller/ForecastController"));
exports.forecastRouter = express_1.default.Router();
exports.forecastRouter.get("/", ForecastController_1.default.getForecast);
