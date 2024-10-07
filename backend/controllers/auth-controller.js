const User = require("../models/user-model")
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

var jwt = require('jsonwebtoken');


const home =  async(req, res)=> {
  try{
    res
    .status(200)
    .send("Welcome to the router page ")
  }catch(err){
    console.log(err)
  }
}

//this is the logic behind the registeration 


const register = async(req, res) => {
  try{
    console.log(req.body)
    
const { username , email, phone, password } = req.body;

const userExist =  await User.findOne({email})


if(userExist) {

  return res.status(400).json({ message: "email already exist"})
}
//hash the password 
// const saltRound = 10;
// const hash_password = await bcrypt.hash(password, saltRound)



const userCreated = await User.create({
  username ,
  email,
phone,
  password})

    res
    .status(201)
    .json({ msg: userCreated, 
      token: await userCreated.generateToken(),

      userId: userCreated._id.toString(),
    })

  }
  catch(error){
    console.error(error)
res.status(500).json(" Internal server ereror ")
  }
}


// / ___user login logic 

const login = async (req, res) => {
try{
  const { email , password } = req.body
const userExist = await User.findOne({ email })
console.log(userExist)


if(!userExist) {
  return res.status(400).json({message: "Invalide Credentials"})
}


const user = await bcrypt.compare(password, userExist.password)
// const user = await userExist.comparePassword(password)


if(user) {
  const token = await userExist.generateToken();
  res
  .status(200)
  .json({ msg: "Login Successful", 
    token: await userExist.generateToken(),

    userId: userExist._id.toString(),
  })
}
else{
  res.status(401).json({ message:"Invalid email or password "})
}


}catch(error){
res.status(500).json("Internal server error ")

}

}
/*
it is used to send the data to the user 
user logic
*/
const user =async(req, res) => {
try {
  const userData = req.user
console.log(userData)
res.status(200).json({ msg: userData})

} catch (error) {
  console.log(`error from the user route ${error}`)
}
}

// Forgot password
const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token
    
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Create a transporter
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    transporter.verify((error, success) => {
      if (error) {
        console.error('Transporter error:', error);
      } else {
        console.log('Server is ready to take messages');
      }
    });
    

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Password Reset Link',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset-password/${resetToken}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    // Send email
  
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent to', user.email);
    res.status(200).json({ message: 'Password reset email sent' });



  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const resetPassword = async(req,res)=>{
  // Implement reset password logic here
};


module.exports= {home, register , login, user, forgetPassword, resetPassword}
