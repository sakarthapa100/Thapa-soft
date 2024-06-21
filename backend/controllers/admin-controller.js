const User = require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllusers =async (req,res) =>{

  try {
    const users = await User.find().select("-password")
    console.log(users)
    if(!users || users.length === 0){
return     res.status(404).json({message :"No Users Found"})
    }
   return  res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

const getAllContacts =async (req,res) =>{
  try {
    const contacts = await Contact.find()
    console.log(contacts)
    if(!contacts || contacts.length === 0){
return     res.status(404).json({message :"No Contacts Found"})
    }
    res.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}

const getUserById = async (req,res,next) =>{
  try {
    const id = req.params.id
    const user = await User.findOne({_id:id}, {password:0})

    return res.status(200).json(user)
  } catch (error) {
   
    next(error)
  }
}
const updateUserById = async(req, res, next) => {
  try {
    const id = req.params.id
    const updatedUserData = req.body

const updateData = await User.updateOne({_id:id}, {$set: updatedUserData,})

return res.status(200).json({message:"User Deleted Successfully"})

  } catch (error) {
    next(error)
  }
}



const deleteUser = async (req,res,next) =>{
  try {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    if(!user){
      return res.status(404).json({message : "User Not Found"})
    }
    return res.status(200).json({message : "User Deleted"})
  } catch (error) {
   
    next(error)
  }
}


const deleteContactById = async (req,res,next) =>{
  try {
    const id = req.params.id
    const user = await Contact.findByIdAndDelete(id)
    if(!user){
      return res.status(404).json({message : "Contact Not Found"})
    }
    return res.status(200).json({message : "Contact Deleted"})
  } catch (error) {
   
    next(error)
  }
}




module.exports= {getAllusers,getAllContacts, deleteUser,getUserById, updateUserById, deleteContactById}