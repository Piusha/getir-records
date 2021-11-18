class RecordSearchDTO {
	constructor(startDate, endDate, minAmount, maxAmount) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.minAmount = minAmount;
		this.maxAmount = maxAmount;
	}
}

class RecordResponseDTO {

    constructor(dbRowDataSet){
        this.key = dbRowDataSet.key;
        this.createdAt = dbRowDataSet.createdAt;
        this.totalCount = dbRowDataSet.recordCount;
    }

}

module.exports = {
	RecordSearchDTO,
    RecordResponseDTO
};
