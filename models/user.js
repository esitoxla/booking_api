  import mongoose from "mongoose";
  import { Schema, model } from "mongoose";

  const userSchema = new Schema({
    firstname: {
        type: String
    },

    lastname:{
        type: String
    },

    username:{
        type: String
    },

    avatar: {
        type: String
    },

    email: {
        type: String,
        required: true,
       unique: true
    },

    password:{
        type: String,
        required: true
    
    }
  });

  export const usermodel = model('user',userSchema)

  
  
 
    