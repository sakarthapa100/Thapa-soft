const { model } = require("mongoose")
const {z} = require("zod")

//create an object schema 
const signupSchema = z.object({
  username:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .min(3, {message:"Name must be at least of 3 charaters."})
  .max(255, {message:"Name must not be more that 255 charaters"}),

  email:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .email({ message:"Invalid email address"})
  .min(3, {message:"Email must be at least of 3 charaters."})
  .max(255, {message:"Email must not be more that 255 charaters"}),

  phone:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .min(5, {message:"phone must be at least of 3 charaters."})
  .max(20, {message:"phone must not be more that 255 charaters"}),

  password:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .min(7, {message:"Password must be at least of 3 charaters."})
  .max(255, {message:"Password must not be more that 255 charaters"})

})

const loginSchema = z.object({
  email:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .email({ message:"Invalid email address"})
  .min(3, {message:"Email must be at least of 3 charaters."})
  .max(255, {message:"Email must not be more that 255 charaters"}),


  password:z
  .string({required_error:"NAME IS REQUIRED"})
  .trim()
  .min(7, {message:"Password must be at least of 3 charaters."})
  .max(255, {message:"Password must not be more that 255 charaters"})

})

module.exports = {signupSchema, loginSchema}