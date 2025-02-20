const express = require('express');
const { handleGenerateShortUrl, getUrlById, handleGetAnalytics } = require('../controllers/url')

const router = express.Router();


router.post("/", handleGenerateShortUrl)

router.get('/:shortId', getUrlById)

router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;