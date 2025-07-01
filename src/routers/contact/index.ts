import express from 'express';
import { adminContact } from '../../controllers/Contact/adminContact.controller';

const contactRouter = express.Router();

contactRouter.post('/admimContact', adminContact);

export default contactRouter;