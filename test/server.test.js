const app = require('../app');
const request = require('supertest');

describe('API-Server Test',()=>{

    it("1. It should response 200 if server start",async () => {

        await request(app).get("/v1/heartbeat").expect(200)
    });

});
