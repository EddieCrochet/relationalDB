// set up a router using express
const express = require('express');
const router = express.Router();

let auth = require("../middleware/auth");

// set up controller for the users
let controller = require('../controller/users');

// route to GET all users
router.get('/', controller.getAllUsers);

// GET one user by id
router.get('/:id', controller.getUserById); 

// POST a user based on body info
router.post('/', [auth.checkJwt, auth.isAdmin], controller.createUser);

// PUT route will edit/update a user based on the id in params
router.put('/:id', controller.updateUserById);

// DELETE user by id
router.delete('/:id', controller.deleteUserById);

// export the router to be used bgy the app
module.exports = router;