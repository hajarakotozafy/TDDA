const express = require('express');

const { getDeviceActions, addDeviceActions, deleteDeviceActions, putDeviceActions, getSpecificDAction, getSpecificUserDeviceActions } = require('../controller/DeviceActionsController');

const router = express.Router();

router.route('/').get(getDeviceActions).post(addDeviceActions);

router.route('/specific/:id').put(putDeviceActions).delete(deleteDeviceActions).get(getSpecificDAction);

router.route('/userspecific/:id').get(getSpecificUserDeviceActions);

module.exports = router;