const mongoose = require('mongoose')

async function connectToMongoDb(url) {
    return mongoose.connect(url)
    .then(()=> console.log("MongoDb connected"))
    .catch((err) => console.log("Mongo Error", err));
}


module.exports = { connectToMongoDb }