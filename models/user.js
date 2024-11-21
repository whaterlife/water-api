import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    officeName: { type: String },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    photo: { type: String,required: true },
    phoneNumber: { type: String },
    password: { type: String, required: true },
    role: {
         type: String,
          default: 'user', 
          required: true,
          enum: ['user', 'plumber', 'admin'] }


}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const userModel = model('user', userSchema);