import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const reportSchema = new Schema({
    fullName:  {type: String, required: true},
    email:  {type: String, required: true},
    photo:  {type: String, required: true},
    message:  {type: String, required: true},
    location:  {type: String, required: true}
   
})

reportSchema.plugin(toJSON);

export const ReportModel= model('Report',reportSchema);