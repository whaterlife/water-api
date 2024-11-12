import express from 'express';
import { createReport, getReports, getReportById, updateReport, deleteReport} from '../controllers/report.js';

const reportRouter = express.Router();

reportRouter.post('/reports/create', createReport);
reportRouter.get('/reports/gets', getReports);
reportRouter.get('/reports/:id', getReportById);
reportRouter.patch('/reports/:id', updateReport);
reportRouter.delete('/reports/:id', deleteReport);

export default reportRouter;