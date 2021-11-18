const express = require('express');
const caseStudyController = require('../../controllers/case-study/case-study.controller');
const caseStudyRequest  = require('../../controllers/case-study/case-study.request');
const validate = require('../../middleware/validate');
const router = express.Router();

router.post('/', validate(caseStudyRequest.createRequestValidator),caseStudyController.createRequest)

module.exports = router;