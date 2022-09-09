const connection = require('./connection');

// @desc    Get dvcAction
// @route   GET /api/device_actions
// @access  Private
const getDeviceActions = (req, res) => {
    connection.query('SELECT * FROM device_actions', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get specific user dvcAction
// @route   GET /api/device_actions/user_specific/:id
// @access  Private
const getSpecificUserDeviceActions = (req, res) => {
    connection.query('SELECT * FROM device_actions WHERE dact_id = ?', [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set device actions
// @route   POST /api/device_actions
// @access  Private
const addDeviceActions = (req, res) => {
    connection.query(`INSERT INTO device_actions (dact_name, dact_description, dact_date, dact_created_at, dact_updated_at, device_dvc_id) VALUES (?,?,?,?,?,?)`,
        [req.body.dactName, req.body.dactDescription, req.body.dactDate, req.body.dactCreatedAt, req.body.dactCreatedAt, req.body.deviceId],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE device action
// @route   DELETE /api/device_actions/specific/:id
// @access  Private
const deleteDeviceActions = (req, res) => {
    connection.query(`DELETE FROM device_actions WHERE dact_id = ?`,
        [req.params.id],
        (err, result) => {
            res.status(200).send(result);
        })

}

// @desc    Put device action
// @route   PUT /api/device_actions/:id
// @access  Private
const putDeviceActions = (req, res) => {
    connection.query(`UPDATE device_actions SET dact_name = ?, dact_description = ?, dact_date = ?, dact_updated_at = ? WHERE dact_id = ?`,
        [req.body.dactName, req.body.dactDescription, req.body.dactDate, req.body.dactUpdatedAt, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Get Specific device action
// @route   GET /api/device_actions/specific/:id
// @access  Private
const getSpecificDAction = (req, res) => {
    connection.query('SELECT * FROM device_actions WHERE dact_id = ?', [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

module.exports = {
    getDeviceActions,
    addDeviceActions,
    deleteDeviceActions,
    putDeviceActions,
    getSpecificDAction,
    getSpecificUserDeviceActions
}