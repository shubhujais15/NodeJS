// creating Hashmap 
 const sessionIdToUserMap = new Map();

// creating diary to store user detail nd give a uid to user 

function setUser(id, user){
    sessionIdToUserMap.set(id, user);
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}


module.exports = {
    setUser,
    getUser
}