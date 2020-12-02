const User = require('../models/User');

exports.getProfile = (req, res) => {
    return res.status(200).json({
        status: "access granted"
    });
};

exports.getProfileById = (req, res) => {
    return res.status(200).json({
        status: "access granted to admins only"
    });
};