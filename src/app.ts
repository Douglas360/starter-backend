import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";
import { router } from "./routes";
import { initDb } from "./database";
import errorHandler from "./middleware/errorHandler";

const path = require("path");

// Init database connection
initDb();

const app = express();

// Add middleware to parse the POST data of the body
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

app.use(express.json());

app.use(router);

app.use(errorHandler);

export { app };
