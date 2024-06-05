import userModel from "../models/userModel.js";   
import Jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator" 
import pkg from 'body-parser';
const { json } = pkg;

/* import { json } from "body-parser"; */


//login user
const loginUser =async (req,res) =>{
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"user Doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch(error){

        console.log(error);
        res.json({success:false,message:"Error"})

    }
}

const createToken = (id) =>{
    return Jwt.sign({id},process.env.JTWT_SECRET)
}

//register user
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{
        //checking is user already exists

        const exists = await userModel.findOne({email});
        if (exists){
            return res,json({success:false,message:"user already exists"})
        }

        //validating email fromat and strong password

        if(!validator.isEmail(email)){
            return  res.json({success:false,message:"Please enter a valid email"})
        }

        if (password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id);
        res.json({success:true,token})

        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})


    }
}


export { loginUser,registerUser}