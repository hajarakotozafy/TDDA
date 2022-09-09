const express = require('express');

const { getDevices, addDevice, deleteDevice, putDevice, getSpecificDevice, disconnectDevice, connectDevice, getConnectedDevice, getDisconnectedDevice, getDeletedDevice } = require('../controller/DeviceController');

const router = express.Router();

router.route('/').get(getDevices).post(addDevice);

router.route('/specific/:id').put(putDevice).delete(deleteDevice).get(getSpecificDevice);

router.route('/connected').get(getConnectedDevice);

router.route('/disconnected').get(getDisconnectedDevice);

router.route('/deleted').get(getDeletedDevice);

router.route('/disconnect/:id').put(disconnectDevice);

router.route('/connect/:id').put(connectDevice);

module.exports = router;