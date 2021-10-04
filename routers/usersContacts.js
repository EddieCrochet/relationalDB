// set up a router using express
const express = require('express');
const router = express.Router();

// set up controller for the usersContacts
let controller = require('../controller/usersContacts');

// route to GET all users
router.get('/', controller.getAllContacts);

// export the router to be used by the app
module.exports = router;