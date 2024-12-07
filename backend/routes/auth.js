const express = require('express');
const { signup } = require('../controllers/authControllers');
const {login} = require('../controllers/authControllers');
const {validateSignup}  =  require('../middleware/validation');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/login', login);


// POST route for signup
router.post('/signup', validateSignup, signup);

module.exports = router;
