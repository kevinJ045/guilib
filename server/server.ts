import express from "express";
import http from 'http';
import Serving from "./modules/serving/server";

var app = express();
var server = http.createServer(app);


Serving.init(app);


server.listen(3000, () => console.log('localhost:3000'));