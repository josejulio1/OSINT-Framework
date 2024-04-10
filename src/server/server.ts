import { Express } from "express";
import { config } from "dotenv";
const express = require('express');
import END_POINTS from "./api/routes/data";
import CONTROLLERS from "./api/controllers/data";

config();
const PORT = process.env.PORT || 3000;

const app: Express = express();
app.use(express.static('dist'), express.json());

// Routes
app.get(END_POINTS.GET_TAG, CONTROLLERS.GET_TAG_CONTROLLER);

app.get(END_POINTS.GET_TYPE_SOURCE, CONTROLLERS.GET_TYPE_SOURCE_CONTROLLER);

app.post(END_POINTS.SEARCH_SOURCE, CONTROLLERS.SEARCH_SOURCE_CONTROLLER);

app.listen(PORT, () => console.log(`Puerto ${PORT} abierto`));