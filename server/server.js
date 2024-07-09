const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

// mongodb connection
connectDB()


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})