const { version } = require('../package.json');
const config = require('../app/config/config');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: `${config.app_name}`,
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/Piusha/getir-records.git',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDefinition;
