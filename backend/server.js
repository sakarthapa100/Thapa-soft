require("dotenv").config()
const express = require('express')
const app= express()
const authrouter = require('./router/auth-router')
const contactRoute = require("./router/contact-router")
const connectdb = require('./utils/db')
const errorMiddleware = require("./middlewares/error-middleware")


//middleware for the 
app.use(express.json())


// app.use(bodyParser.json());

//route path
app.use('/api/auth', authrouter)
app.use("/api/from", contactRoute)

app.use(errorMiddleware)

connectdb().then(() => {


const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`Server is running at port no ${port}`)
})
})