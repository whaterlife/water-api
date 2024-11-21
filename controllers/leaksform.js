import { LeaksModel } from "../models/leaksform.js";
import { mailTransporter } from "../utils/mail.js";
import { leaksformValidator } from "../validators/leaksform.js";
import { userModel } from "../models/user.js";

export const createLeakform = async (req, res, next) => {
try {
    // validate user input
    const {error, value} = leaksformValidator.validate({
        ...req.body,
        photo: req.file?.file
    });
    if (error) {
        return res.status(422).json(error); 
    }
    // write form to database
    const newLeakform = await LeaksModel.create({
        ...value,
        user: req.auth.id,

    });

const user = await userModel.findById(req.auth.id)


    // send confirmation email
    await mailTransporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Leakform Raised Successful",
        text: `Your leakform with title: ${value.description} has been received and a plumber will attend to you. `,
    });

    // respond to request
    res.status(201).json(newLeakform);
        
} catch (error) {
    next (error)
}
}


export const getLeakforms = async (req, res, next) => {
try {
    const { filter = "{}", sort = "{}", limit = 100, skip = 0} = req.query;
    // fetch form from database
    const leakforms = await LeaksModel
    .find(JSON.parse(filter))
    .sort(JSON.parse(filter))
    .limit(parseInt(limit))  // Ensure limit is an integer
    .skip(parseInt(skip));   // Ensure skip is an integer

    //return respond
    return res.status(200).json(leakforms)
        
} catch (error) {
   next (error) 
}
}


export const getLeakform = async (req, res, next) => {
try {
    //get form by id from database
    const leaksform = await LeaksModel.findById(req.params.id);
    //respond to request
    res.json(leaksform);
        
} catch (error) {
    next (error)
}
}