require('dotenv').config()

const express = require ('express')
const workoutsRoutes = require ('./routes/workouts')
const mongoose = require ('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use ('/api/workouts', workoutsRoutes)

/*app.get ('/', (req, res) => {
    res.json ({mssg: 'Welcome to my MERN App!'})
})*/

//connecting to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listeing for request
    app.listen(process.env.PORT, ()=>{
        console.log('Connecting to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})
