const jwt = require("jsonwebtoken")

const authMiddleware =(req, res, next) => {
const token = req.header('Authorization')

if(!token){
  return res
  .status(401)
  .json({message: "unauthorized HTTP, Token not provided  "})
}
console.log("token form auth middleware")
//assuming token is in the format "Bearer", roemoving the prefix



next()
}

module.exports = authMiddleware