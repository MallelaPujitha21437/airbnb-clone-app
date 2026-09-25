import { Router } from 'express';
import { listing, photos, reviews, amenities, nearby, availability, favorite, reserve, search } from '../controllers/listingController.js';
const router = Router();
router.get('/listing', listing); router.get('/photos', photos); router.get('/reviews', reviews); router.get('/amenities', amenities); router.get('/nearby', nearby); router.get('/availability', availability); router.get('/favorite', favorite); router.post('/favorite', favorite); router.post('/reservations', reserve); router.get('/search', search); router.get('/health', (req, res) => res.json({ ok: true }));
export default router;
