
export class OutputForecast {
    constructor (
        private city: string,
        private date: string,
        private time: string,
        private temp: number,
        private humidity: number,
        private wind_speedy: string
    ) {}

    public static toForecastModel = (input: any) =>{
        return new OutputForecast (
            input.city,
            input.date,
            input.time,
            input.temp,
            input.humidity,
            input.wind_speedy
        );
    }

    public getCity = (): string => this.city;
    public getDate = (): string => this.date;
    public getTime = (): string => this.time;
    public getTemp = (): number => this.temp;
    public getHumidity = (): number => this.humidity;
    public getWindSpeed = (): string => this.wind_speedy;
}