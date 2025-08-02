import express from 'express';
import { createPost, getAllPosts } from '../controllers/postController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getAllPosts);

export default router;