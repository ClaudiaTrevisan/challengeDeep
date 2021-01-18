import { AddressInfo } from "net";
import express from "express";
import cors from 'cors';
import { forecastRouter } from "./routes/forecastRouter";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/forecast", forecastRouter);

const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
  