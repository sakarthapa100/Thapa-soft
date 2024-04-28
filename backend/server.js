require("dotenv").config()
const express = require('express')
const cors = require("cors")
const app= express()
const authrouter = require('./router/auth-router')
const contactRoute = require("./router/contact-router")
const connectdb = require('./utils/db')
const errorMiddleware = require("./middlewares/error-middleware")
 
//handeling cors policy
const corsOptions = {
  origin:"http://localhost:5173",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true
}
app.use(cors(corsOptions))


//middleware for the 
app.use(express.json())


// app.use(bodyParser.json());

//route path
app.use('/api/auth', authrouter)
app.use("/api/form", contactRoute)

app.use(errorMiddleware)

connectdb().then(() => {


const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`Server is running at port no ${port}`)
})
})