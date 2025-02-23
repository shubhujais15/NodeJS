// creating Hashmap 
//  const sessionIdToUserMap = new Map();
// We use above hash map for manage state but now we do stateless and import jwt


const jwt = require("jsonwebtoken")

const secretKey = 'Sandy$132@$'



// creating diary to store user detail nd give a uid to user 

// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }


function setUser(user){
    const payload = {
            _id: user._id,
            email: user.email,
            role: user.role
    }
    // creating tokens for user
    return jwt.sign(payload, secretKey)
}

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }


function getUser(token){
    if(!token) return null;
    try{
        // Jo v user frontend se token dega wo secret key se verify 
        return jwt.verify(token, secretKey)
    } catch(error) {
        return null
    }

}


module.exports = {
    setUser,
    getUser
}