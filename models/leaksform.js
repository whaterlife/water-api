import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const leaksSchema = new Schema({
    firstName:  {type: String, required: true},
    lastName:  {type: String, required: true},
    gpsAddress:  {type: String, required: true},
    contact:  {type: String, required: true},
    description:  {type: String, required: true},
    date:  {type: String, required: true},
    photo:  {type: String},
    signature:  {type: String, required: true}
})

leaksSchema.plugin(toJSON);

export const LeaksModel= model('leaks', leaksSchema);