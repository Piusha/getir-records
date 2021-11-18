const express = require('express');
const { models } = require('mongoose');

const router = express.Router();
const caseStudyRoute = require('./case-study.route');

router.get("/heartbeat", (req, res) => {
    res.json(true);
});


router.use('/case-study',caseStudyRoute)

module.exports = router;