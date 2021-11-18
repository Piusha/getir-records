const app = require('../app');

const config = require('../app/config/config');
describe('Config test Test',()=>{

    test("it should read .env to load configs", () => {
        expect(config.api_version).toBe('v1')
    });

});