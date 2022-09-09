const express = require('express');

const { getUsers, addUser, deactiveUser, putUser, getSpecificUser, getActivedUser, getDeactivedUser } = require('../controller/UserController');

const router = express.Router();

router.route('/').get(getUsers).post(addUser);

router.route('/specific/:id').put(putUser).delete(deactiveUser).get(getSpecificUser);

router.route('/actived').get(getActivedUser);

router.route('/deactived').get(getDeactivedUser);

module.exports = router;