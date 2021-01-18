"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputForecast = void 0;
class OutputForecast {
    constructor(date, time, temp, humidity, wind_speed) {
        this.date = date;
        this.time = time;
        this.temp = temp;
        this.humidity = humidity;
        this.wind_speed = wind_speed;
        this.getDate = () => this.date;
        this.getTime = () => this.time;
        this.getTemp = () => this.temp;
        this.getHumidity = () => this.humidity;
        this.getWindSpeed = () => this.wind_speed;
    }
}
exports.OutputForecast = OutputForecast;
OutputForecast.toForecastModel = (input) => {
    return new OutputForecast(input.date, input.time, input.temp, input.humidity, input.wind_speed);
};
