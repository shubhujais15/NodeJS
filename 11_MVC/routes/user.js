const express = require('express')

const { handleGetAllusers, handleCreateNewUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user')




const router = express.Router();



// router.get('/users',async (req,res)=>{
//     // console.log("name from",req.myUserName)
//     const allDbUsers = await User.find({})
//     const html = `
//     <ul>
//     ${allDbUsers.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html)
// })


// Routes
// router.get('/', async(req,res)=>{
    
// })

// // Get
// router.get('/', handleGetAllusers)


// // Post
// router.post('/', handleCreateNewUsers)


router.route("/")
.get(handleGetAllusers)
.post(handleCreateNewUsers)



// Dynamic Path parameters -- using ":id"
router.get("/:id", getUserById)



// Patch
router.patch('/:id', updateUserById)


// Delete
router.delete('/:id', deleteUserById)



// Doing many methods on a same route so we can write like this also

// router.route("/:id")
//    .get(getUserById)
//    .put(updateUserById)
//    .delete(deleteUserById);

   module.exports = router;