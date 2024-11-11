import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('user', userSchema);


