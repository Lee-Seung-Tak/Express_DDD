const express         = require('express');
const router          = express.Router();
const userConteroller = require('./user.controller');


router.post('/users',       userConteroller.createUser );
router.get('/users',        userConteroller.getAllUsers);
router.get('/users/:id',    userConteroller.getUserById);
router.patch('/users/:id',  userConteroller.updateUser );
router.delete('/users/:id', userConteroller.deleteUser );

module.exports = router;