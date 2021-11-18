require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("./core/morgan");
const config = require("./app/config/config");
const routes = require("./app/routes/v1");
const ApiError = require("./core/ApiError");
const { errorConverter, errorHandler } = require('./app/middleware/error');
const httpStatus = require("http-status");

const app = express();

if (config.env !== "test") {
	app.use(morgan.successHandler);
	app.use(morgan.errorHandler);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
