import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    officeName: {type: String, required: true},
    plumberName: {type: String, required: true},
    location: {type: String, required: true},
    photo: {type: String, required: true},
    phoneNumber: {type: String, required: true}
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema);