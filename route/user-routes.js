import express from 'express';
import {getAllUser, signup, login} from '../controller/user-controller.js';


const router = express.Router();

router.get('/',getAllUser);
router.post('/create', signup);
router.post('/login', login);

export default router;