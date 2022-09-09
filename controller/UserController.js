const connection = require('./connection');

// @desc    Get Users
// @route   GET /api/user
// @access  Private
const getUsers = (req, res) => {
    connection.query('SELECT * FROM user', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set User
// @route   POST /api/user
// @access  Private
const addUser = (req, res) => {
    connection.query(`INSERT INTO user (user_name, user_lastname, user_email, user_password, user_actived, user_created_at, user_updated_at) VALUES (?,?,?,?,1,?,?)`,
        [req.body.userName, req.body.userLastName, req.body.userEmail, req.body.userPassword, req.body.userCreatedAt, req.body.userCreatedAt],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE User
// @route   DELETE /api/user/specific/:id
// @access  Private
const deactiveUser = (req, res) => {
    connection.query(`UPDATE user SET user_actived = 0 WHERE user_id = ?`,
        [req.params.id],
        (err, result) => {
            res.status(200).send(result);
        })

}

// @desc    Put User
// @route   PUT /api/user/specific/:id
// @access  Private
const putUser = (req, res) => {
    connection.query(`UPDATE user SET user_name = ?, user_lastname = ?, user_email = ?, user_password = ?, user_updated_at = ? WHERE user_id = ?`,
        [req.body.userName, req.body.userLastName, req.body.userEmail, req.body.userPassword, req.body.userUdatedAt, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Get Specific user
// @route   GET /api/user/specific/:id
// @access  Private
const getSpecificUser = (req, res) => {
    connection.query('SELECT * FROM user WHERE user_id = ?', [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get Actived Users
// @route   GET /api/user/actived
// @access  Private
const getActivedUser = (req, res) => {
    connection.query('SELECT * FROM user WHERE user_actived = 1', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Get Deactived Users
// @route   GET /api/user/deactived
// @access  Private
const getDeactivedUser = (req, res) => {
    connection.query('SELECT * FROM user WHERE user_actived = 0', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

module.exports = {
    getUsers,
    addUser,
    deactiveUser,
    putUser,
    getSpecificUser,
    getActivedUser,
    getDeactivedUser
}