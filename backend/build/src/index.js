"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const forecastRouter_1 = require("./routes/forecastRouter");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/forecast", forecastRouter_1.forecastRouter);
const server = app.listen(3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao rodar o servidor.`);
    }
});
