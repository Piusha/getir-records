const logger = require("../../core/logger");
const { RecordResponseDTO } = require("../dto/record.dto");
const Record = require("../models/RecordModel");

const recordFindAggregate = (searchDTO) => {
	return [
		{
			$match: {
				createdAt: {
					$gte: searchDTO.startDate,
					$lt: searchDTO.endDate,
				},
			},
		},
		{
			$addFields: {
				recordCount: {
					$reduce: {
						input: "$counts",
						initialValue: 0,
						in: { $add: ["$$value", "$$this"] },
					},
				},
			},
		},
		{
			$match: {
				recordCount: {
					$gte: searchDTO.minAmount,
					$lt: searchDTO.maxAmount,
				},
			},
		},
	];
};

const getRecords = async (searchDTO) => {

    const resultSet = await Record.aggregate(recordFindAggregate(searchDTO));

    return resultSet.map(record => new RecordResponseDTO(record));

};

module.exports = {
	getRecords,
};
