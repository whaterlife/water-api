import { LeaksModel } from '../models/leaksform.js';

// Update status to "In Progress"
export const setStatusInProgress = async (req, res) => {
    try {
        const leakId = req.params.id;
        const leak = await LeaksModel.findByIdAndUpdate(
            leakId,
            { status: 'In Progress' },
            { new: true } // returns the updated document
        );

        if (!leak) {
            return res.status(404).json({ message: 'Leak not found' });
        }

        res.json(leak);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update status to "Resolved"
export const setStatusResolved = async (req, res) => {
    try {
        const leakId = req.params.id;
        const leak = await LeaksModel.findByIdAndUpdate(
            leakId,
            { status: 'Resolved' },
            { new: true }
        );

        if (!leak) {
            return res.status(404).json({ message: 'Leak not found' });
        }

        res.json(leak);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
