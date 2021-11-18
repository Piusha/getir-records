const dotenv = require("dotenv");
const path = require("path");
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envSchema = Joi.object()
	.keys({
		API_VERSION:Joi.string().required(),
        NODE_ENV: Joi.string()
			.valid("production", "development", "test")
			.required(),
		PORT: Joi.number().default(3000),
		MONGODB_URL: Joi.string().required().description("Mongo DB url"),
        
	})
	.unknown();

const { value: envVars, error } = envSchema
	.prefs({ errors: { label: "key" } })
	.validate(process.env);

module.exports = {
    api_version:envVars.API_VERSION,
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	mongoose: {
		url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
		options: {},
	},
	jwt: {
		secret: envVars.JWT_SECRET
	}
};
