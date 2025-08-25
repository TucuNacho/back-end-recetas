import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "../db/config.js"
export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.middlewares();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(`${__dirname}/../public`));
  }
  listen() {
    this.app.listen(this.port, ()=>{
        console.info(`El servidor se esta alojando el puerto: http://localhost:${this.port}`)
    })
  }
}
