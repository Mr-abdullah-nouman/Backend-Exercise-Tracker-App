const mongoose = require('mongoose')

function connecttodb() {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(process.env.MONGO_URI, connectionParams)
        .then(() => {
            console.log('Connected to the database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
}
module.exports = connecttodb