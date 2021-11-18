const httpStatus = require("http-status");
const successResponse = require("../../../core/ApiSuccessResponse");
const { RecordSearchDTO } = require("../../dto/record.dto");
const { getRecords } = require("../../services/record.service");

const createRequest = async (req, res, next) => {
	const data = await getRecords(
		new RecordSearchDTO(
			req.body.startDate,
			req.body.endDate,
			req.body.minCount,
			req.body.maxCount,
		),
	);
	res.send(successResponse(httpStatus.OK,data));
};

module.exports = {
	createRequest,
};
