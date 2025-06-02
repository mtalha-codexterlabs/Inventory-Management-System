require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/items')

// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req,res,next) =>
    {
        console.log(req.path, req.method)
        next()
    })

// Routes
app.use('/api/ims/',itemRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Successfully!")
        // Listen for requests     
        app.listen(process.env.PORT, () => 
            {
                console.log('Listening on Port', process.env.PORT)
            })
    })
    .catch((error) =>{
        console.log("ERROR: ", error)
    })

