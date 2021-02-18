const express = require('express');
const router = express.Router();

// @route   GET api/admin/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Payment Works' }));

module.exports = router;
