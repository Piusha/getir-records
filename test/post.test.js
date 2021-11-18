const app = require("../app");
const request = require("supertest");
const httpStatus = require("http-status");

describe("Case study POST Validation", () => {

	describe("POST /v1/case-study", () => {
		let caseStudyPayload;
		beforeEach(() => {
			caseStudyPayload = {
				startDate: '01-26-2016',
				endDate: '02-02-2018',
				minCount: 4000,
                maxCount: 3000
			};
		});

        it("it should return 404 when route cannot be found", async () => {
			await request(app).post("/v1/case-study-2").send(caseStudyPayload).expect(httpStatus.NOT_FOUND);
		});


		it("it should return 400 if start date is not in the YYYY-MM-DD format", async () => {
			await request(app).post("/v1/case-study")
            .send(caseStudyPayload)
            .expect(httpStatus.BAD_REQUEST);
		});

        it("it should return 400 if end date is not in the YYYY-MM-DD format", async () => {
			await request(app).post("/v1/case-study")
            .send(caseStudyPayload)
            .expect(httpStatus.BAD_REQUEST);
		});

        it("it should return 400 if min count is greater than max count", async () => {
            caseStudyPayload.startDate = '2016-02-21';
            caseStudyPayload.endDate = '2018-02-21';
			await request(app).post("/v1/case-study")
            .send(caseStudyPayload)
            .expect(httpStatus.BAD_REQUEST);
		});

        it("it should return 200 data is valid", async () => {
            caseStudyPayload.startDate = '2016-02-21';
            caseStudyPayload.endDate = '2018-02-21';
            caseStudyPayload.minCount= 2000,
			await request(app).post("/v1/case-study")
            .send(caseStudyPayload)
            .expect(httpStatus.OK);
		});


        

	});
});
