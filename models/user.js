import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const userModel = model('user', userSchema);


