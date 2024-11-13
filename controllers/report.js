import { reportValidator } from '../validators/report.js';
import { ReportModel } from '../models/report.js';

// Create a new report
export const createReport = async (req, res, next) => {
    try {
        const { error, value } = reportValidator.validate({
            ...req.body,
            photo: req.file ? req.file.filename : null // Ensure the photo field is handled correctly
        });

        if (error) {
            return res.status(422).json({ message: error.details[0].message });
        }

        // Assuming you want to proceed with creating a report in the database after validation
        const report = await ReportModel.create(value);

    //     // send confirmation email
    // await mailTransporter.sendMail({
    //     from: process.env.EMAIL_USER,
    //     to: user.email,
    //     subject: "Leakform Raised Successful",
    //     text: `Your leakform with title: ${value.message} has been received and a plumber will attend to you. `,
    // });

        res.status(201).json(report);
    } catch (error) {
        next(error); // Pass error to the next middleware
    }
};


// Get all reports
export const getReports = async (req, res) => {
    try {
        const reports = await ReportModel.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a report by ID
export const getReportById = async (req, res) => {
    try {
        const report = await ReportModel.findById(req.params.id);
        if (!report) return res.status(404).json({ message: 'Report not found' });
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a report
export const updateReport = async (req, res) => {
    try {
        const report = await ReportModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!report) return res.status(404).json({ message: 'Report not found' });
        res.status(200).json(report);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a report
export const deleteReport = async (req, res) => {
    try {
        // delete a book and all books from database
        const deleteReport = await ReportModel.deleteOne(req.body.id)
        res.json('Report deleted');
    } catch (error) {
        next(error);

    }
}