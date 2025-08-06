import User from "../models/userModels.js";
import Profile from "../models/profileModels.js";
// import { updateuser } from "./studentController.js";

export const createProfile=async(req,res)=>{
    const{email,bio,age}=req.body;
     
    let user =await User.findOne({email})
    console.log(user)

  let profile =await Profile.create({bio,age,user:user._id});
  res.status(201).send({message:"Profile created Successfully",profile:profile});

}


export const getProfile=async(req,res)=>{
    const{email}=req.body;
    let user=await User.findOne({email})
    let profile=await Profile.findOne({user:user._id}).populate('user');
    res.send({profile:profile});
}