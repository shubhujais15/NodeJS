// It contains functions jisko hum apne routes se attach krenge

const User = require('../models/user')


async function handleGetAllusers(req,res) {
    const allDbUsers = await User.find({})
    // res.setHeader("X-myName", "Sandy")
    return res.json(allDbUsers)
}


async function handleCreateNewUsers(req,res) {
    // Create new user
    const body = req.body;
    // creating User
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })
    // console.log(result)
    return res.status(201).json({msg: "Success", id: result._id})
}


async function getUserById(req,res) {
    const user = await User.findById(req.params.id)
    return res.json(user);
}


async function updateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, {last_name: 'Changed'})
    // update user with id
    return res.json({status:"success"})
}



async function deleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id)
    // Delete user with id
    return res.json({status:"success"})
}




module.exports = {
    handleGetAllusers,
    handleCreateNewUsers,
    getUserById,
    updateUserById,
    deleteUserById
}