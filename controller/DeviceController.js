const connection = require('./connection');

// @desc    Get Devices
// @route   GET /api/device
// @access  Private
const getDevices = (req, res) => {
    connection.query('SELECT * FROM device', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set Device
// @route   POST /api/device
// @access  Private
const addDevice = (req, res) => {
    connection.query(`INSERT INTO device (dvc_name, dvc_description, dvc_created_at, dvc_updated_at, state_state_id, user_user_id) VALUES (?,?,?,?,?,?)`,
        [req.body.dvcName, req.body.dvcDescription, req.body.dvcCreatedAt, req.body.dvcCreatedAt, req.body.stateId, req.body.userId],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE Device
// @route   DELETE /api/device/specific/:id
// @access  Private
const deleteDevice = (req, res) => {
    connection.query(`UPDATE device SET state_state_id = 3 WHERE dvc_id = ?`,
        [req.params.id],
        (err, result) => {
            res.status(200).send(result);
        })

}

// @desc    Disconnect Device
// @route   PUT /api/device/disconnect/:id
// @access  Private
const disconnectDevice = (req, res) => {
    connection.query(`UPDATE device SET state_state_id = 2 WHERE dvc_id = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Connect Device
// @route   PUT /api/device/connect:id
// @access  Private
const connectDevice = (req, res) => {
    connection.query(`UPDATE device SET state_state_id = 1 WHERE dvc_id = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Put Device
// @route   PUT /api/device/specific/:id
// @access  Private
const putDevice = (req, res) => {
    connection.query(`UPDATE device SET dvc_name = ?, dvc_description = ?, dvc_updated_at = ? WHERE dvc_id = ?`,
        [req.body.dvcName, req.body.dvcDescription, req.body.dvcUpdatedAt, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Get Specific Device
// @route   GET /api/device/specific/:id
// @access  Private
const getSpecificDevice = (req, res) => {
    connection.query('SELECT * FROM device WHERE dvc_id = ?', [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get Connected Devices
// @route   GET /api/device/connected
// @access  Private
const getConnectedDevice = (req, res) => {
    connection.query('SELECT * FROM device WHERE state_state_id = 1', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get Disconnected Devices
// @route   GET /api/device/disconnected
// @access  Private
const getDisconnectedDevice = (req, res) => {
    connection.query('SELECT * FROM device WHERE state_state_id = 2', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get Deleted Devices
// @route   GET /api/device/deleted
// @access  Private
const getDeletedDevice = (req, res) => {
    connection.query('SELECT * FROM device WHERE state_state_id = 3', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};


module.exports = {
    getDevices,
    addDevice,
    deleteDevice,
    putDevice,
    disconnectDevice,
    connectDevice,
    getConnectedDevice,
    getDeletedDevice,
    getDisconnectedDevice,
    getSpecificDevice
}