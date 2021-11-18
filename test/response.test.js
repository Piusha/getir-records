const httpStatus = require("http-status");
const app = require("../app");
const ApiError = require("../core/ApiError");
const {errorConverter} = require('../app/middleware/error')
const httpMocks = require('node-mocks-http');


describe("API Response test", () => {
	test("should return default error messages http status", () => {
		const error = new Error();
		error.statusCode = httpStatus.BAD_REQUEST;
		const next = jest.fn();

		errorConverter(
			error,
			httpMocks.createRequest(),
			httpMocks.createResponse(),
			next,
		);

		expect(next).toHaveBeenCalledWith(expect.any(ApiError));
		expect(next).toHaveBeenCalledWith(
			expect.objectContaining({
				statusCode: error.statusCode,
				message: httpStatus[error.statusCode],
				isOperational: false,
			}),
		);
	});
});
