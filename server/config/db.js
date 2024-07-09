const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo Connected on : ${(con).connection.host}`);
    } catch (error) {
        throw error
        process.exit(1)
    }
}

module.exports = connectDB