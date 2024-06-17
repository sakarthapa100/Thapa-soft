const mongoose =require("mongoose")
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

  username:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  phone:{
    type:Number,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  isAdmin:{
    type:Boolean,
   default:false
  },
})


userSchema.pre('save',async function(next){

console.log("pre method ", this)
 
const user = this;
if(!user.isModified("password")){
   return next()
}
try{

  const saltRound = await bcrypt.genSalt(10) ;
  const hash_password = await bcrypt.hash(user.password, saltRound)
  user.password =hash_password
  next()
}catch(error){

  next(error)
}

})
//compare the passwword 
userSchema.methods.comparePassword = async function (password) {
  try{

 return await bcrypt.compare(password, this.password)
  }catch(error){
throw error
  }
 
}



// json web token
userSchema.methods.generateToken = async function () {
try{
return jwt.sign({
  userId: this._id.toString(),
email: this.email,
isAdmin: this.isAdmin,

},
process.env.JWT_SECRET_KEY ,
{
  expiresIn:"30d",
}
)

}catch(error) {
  console.error(error)
}

} 




const User = new mongoose.model("User", userSchema)

module.exports= User