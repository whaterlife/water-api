import express from 'express';
import { setStatusInProgress, setStatusResolved, getReportsByStatus } from '../controllers/reportstatus.js';

const reportStatusRouter = express.Router();

// Route to update status to "In Progress"
reportStatusRouter.patch('/:id/status/in-progress', setStatusInProgress);

// Route to update status to "Resolved"
reportStatusRouter.patch('/:id/status/resolved', setStatusResolved);

// Route to get reports by status
reportStatusRouter.get('/status/:status', getReportsByStatus);

export default reportStatusRouter;
