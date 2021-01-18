"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basedatabase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
class Basedatabase {
    constructor() {
        this.getConnection = (city) => {
            let result = [];
            Basedatabase.connection =
                axios_1.default.get(`https://api.hgbrasil.com/weather?key=8b2833a5&city_name=${city}`)
                    .then((response) => {
                    result = response;
                })
                    .catch((error) => {
                    console.log(error.message);
                });
            return Basedatabase.connection;
        };
    }
}
exports.Basedatabase = Basedatabase;
Basedatabase.connection = null;
