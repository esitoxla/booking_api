import bcrypt from "bcrypt.js"
import { usermodel } from "../models/user.js"
import { loginUserValidator, registerUserValidator } from "../validators/user.js"

export const registerUser = async (req, res, next) => {
   try {
    //validate user
    const {error, value} = registerUserValidator.validate(req.body)
    if (error){
      return res.status(422).json(error);
    }
    //check if user does not exist 
    const user = await usermodel.findOne({ email: value.email });
    if (user){
      return res.status(409).json('User already exist!')
    }
    //hash password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    await usermodel.create({
      ...value,
      password: hashedPassword,
    });
    //respond to request
     res.json('User registered')
   } catch (error) {
     next (error)   
    
   }
}

export const loginUser = async (req, res, next) => {
    try {
      //validate user
      const {error, value} = loginUserValidator.validate(req.body)
      //find one user with identifier
      const user = await usermodel.findOne()
      //compare passwords
      const correctPassword = bcrypt.compareSync(value.password, user.password)
      if (!correctPassword)
        return res.status(401).json('invalid credentials');
      //sign a token for user
      //respond to request
      res.json('User logged in!')
    } catch (error) {
      next (error)
    }
}

export const getUserProfile = (req, res, next)=> {
    res.json('get user profile')
}

export const logoutUser = (req, res, next) => {
    res.json('User logged out!')
}