const successResponse = (code,records, message = "") => {
	message = (message == "") ? "Success" : message;
	return {
		code,
		message,
		records,
	};
};

module.exports = successResponse;
