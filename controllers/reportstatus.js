import { ReportModel } from '../models/report.js';

// Update status to "In Progress"
export const setStatusInProgress = async (req, res) => {
    try {
        const reportId = req.params.id;
        const report = await ReportModel.findByIdAndUpdate(
            reportId,
            { status: 'In Progress' },
            { new: true } // returns the updated document
        );

        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update status to "Resolved"
export const setStatusResolved = async (req, res) => {
    try {
        const reportId = req.params.id;
        const report = await ReportModel.findByIdAndUpdate(
            reportId,
            { status: 'Resolved' },
            { new: true }
        );

        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reports by status
export const getReportsByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const reports = await ReportModel.find({ status });

        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
