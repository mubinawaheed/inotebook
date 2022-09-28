const mongoose = require('mongoose')
mongouri = "mongodb://localhost:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongouri, () => {
        console.log('connected to mongoDB')
    })
};


module.exports = connectToMongo;