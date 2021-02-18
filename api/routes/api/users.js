const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const mongoose = require('mongoose');

//Load Middlewares
const { auth } = require('../../middlewares/auth');
const users_validation = require('../../middlewares/validations/validateUser');

//Load Controllers
const users_controller = require('./../../controllers/userController');
// @route   GET api/users/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'User Works' }));

// @route   POST api/users/signup
// @desc    send user data for registeration
// @access  public
router.post(
  '/signup',
  users_validation.validateRegister,
  users_controller.createUser
);

// @route   POST api/users/login
// @desc    send user data for logging in
// @access  public
router.post(
  '/login',
  users_validation.validateLogin,
  users_controller.loginUser
);

// @route   GET api/users/user
// @desc    Get user data
// @access  private
router.get('/user', auth, users_controller.getUser);

// @route   PUT api/users/edit_account
// @desc    Edit user data
// @access  private
router.put(
  '/edit_account',
  auth,
  users_validation.validateEditUser,
  users_controller.editUser
);

module.exports = router;
