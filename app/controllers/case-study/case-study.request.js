const Joi = require("joi").extend(require('@joi/date'));

const createRequestValidator = {
	body: Joi.object().keys({
		startDate: Joi.date().format('YYYY-MM-DD').utc(),
		endDate: Joi.date().format('YYYY-MM-DD').utc(),
		minCount: Joi.number().less(Joi.ref('maxCount')).required(),
        maxCount: Joi.number().required()
	}),
};

module.exports = {
	createRequestValidator,
};
