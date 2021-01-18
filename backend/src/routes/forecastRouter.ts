import express from "express";
import ForecastController from "../controller/ForecastController";

export const forecastRouter = express.Router();

forecastRouter.get("/", ForecastController.getForecast);