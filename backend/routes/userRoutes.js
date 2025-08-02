import express from 'express';
import { updateProfile, getUserProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.put('/profile', auth, updateProfile);
router.get('/profile/:userId', getUserProfile);

export default router;