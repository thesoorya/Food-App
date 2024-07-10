const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')
const foodRouter = require('./routes/foodRoute')

const PORT = process.env.PORT || 5000

// mongodb connection
connectDB()

app.use(express.json())
app.use('/api', foodRouter)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})