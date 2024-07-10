const User = require("../model/userSchema")

exports.getUsers = async (req, res) => {

    try {
        const getUsers = await User.find()
        res.status(200).json({
            count: getUsers.length,
            data: getUsers
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
}

exports.getUser = async (req, res) => {

    try {
        const getUser = await User.findById(req.params.id)
        if (!getUser) {
            return res.status(400).json({
                error: "Invalid Id or user does not exist"
            })
        }
        res.status(200).json({
            data: getUser
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteUser = async (req, res) => {

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)

        if (!deleteUser) {
            return res.status(400).json({
                error: "Invalid Id or user does not exist"
            })
        }
        res.status(200).json("User Deleted")
    }
    catch (err) {
        res.status(500).json(err);
    }
}