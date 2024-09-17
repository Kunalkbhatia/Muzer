import { WebSocketServer } from "ws";

const port = process.env.PORT ? +process.env.PORT : 8080;
const wss = new WebSocketServer({ port });


wss.on('open' , ()=> {
    console.log("connected")
})