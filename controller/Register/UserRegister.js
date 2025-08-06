import User from "../../models/userModels.js";
import bcrypt from "bcrypt";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;



export const register= async(req,res)=>{
    const{name,email,password}=req.body;
    if(!name)res.status(404).send({message:"name is not  found"})
    if(!email)res.status(404).send({message:"email is nopt found"})
    if(!password)res.status(404).send({message:"paSsword is not found"})


        if(!emailRegex.test(email)) return res.status(400).send('invalid email')
         if(!passwordRegex.test(password)) return res.status(400).send('invalid formate possward')

        let existUser=await User.findOne({email})
        if(existUser)res.send({message:"already exists user"})

          let hashedPassword  = await bcrypt.hash(password, 10)
          let user= await User.create({name,email,password:hashedPassword})
          res.status(201).send({message:"user register succesfully",user:user})

}