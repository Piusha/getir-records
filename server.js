const mongoose = require("mongoose");

const app = require("./app");
const config = require("./app/config/config");
const logger = require("./core/logger");
const port = process.env.PORT;

logger.debug(`Node environment: ${process.env.NODE_ENV}`);

logger.debug(`MongoDB URL: ${config.mongoose.url}`);


let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
	logger.info("Connected to MongoDB");

	server = app.listen(config.port, () => {
		logger.info(`Listening to port ${config.port}`);
	});
});

const exitHandler = () => {
	if (server) {
		server.close(() => {
			logger.info("Server closed");
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

const unexpectedErrorHandler = (error) => {
	logger.error(error);
	exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
	logger.info("SIGTERM received");
	if (server) {
		server.close();
	}
});
