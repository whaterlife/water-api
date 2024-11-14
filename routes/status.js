import express from 'express';
import { setStatusInProgress, setStatusResolved } from '../controllers/leakform.js';

const statusRouter = express.Router();

// Route to update status to "In Progress"
statusRouter.patch('/:id/status/in-progress', setStatusInProgress);

// Route to update status to "Resolved"
statusRouter.patch('/:id/status/resolved', setStatusResolved);

export default statusRouter;
