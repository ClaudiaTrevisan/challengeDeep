"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputForecast = void 0;
class OutputForecast {
    constructor(city, date, time, temp, humidity, wind_speedy) {
        this.city = city;
        this.date = date;
        this.time = time;
        this.temp = temp;
        this.humidity = humidity;
        this.wind_speedy = wind_speedy;
        this.getCity = () => this.city;
        this.getDate = () => this.date;
        this.getTime = () => this.time;
        this.getTemp = () => this.temp;
        this.getHumidity = () => this.humidity;
        this.getWindSpeed = () => this.wind_speedy;
    }
}
exports.OutputForecast = OutputForecast;
OutputForecast.toForecastModel = (input) => {
    return new OutputForecast(input.city, input.date, input.time, input.temp, input.humidity, input.wind_speedy);
};
