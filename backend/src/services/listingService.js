import { readJson, writeJson } from '../repositories/jsonRepository.js';
export const getListing = () => readJson('listing.json');
export const getPhotos = () => readJson('photos.json');
export const getReviews = () => readJson('reviews.json');
export const getAmenities = () => readJson('amenities.json');
export const getNearby = () => readJson('nearby.json');
export const getAvailability = () => readJson('availability.json');
export const getState = () => readJson('state.json');
export async function setFavorite(favorite) { return writeJson('state.json', { favorite }); }
export async function createReservation(payload) {
    const listing = await getListing();
    const nights = Math.max(0, Math.round((new Date(payload.checkout) - new Date(payload.checkin)) / 86400000));
    if (nights < 5) throw new Error('Minimum stay is 5 nights.');
    const reservations = await readJson('reservations.json');
    const nightly = listing.price;
    const subtotal = nightly * nights;
    const cleaning = 1500;
    const service = Math.round(subtotal * 0.14);
    const total = subtotal + cleaning + service;
    const reservation = { id: `RES-${Date.now()}`, createdAt: new Date().toISOString(), ...payload, nights, subtotal, cleaning, service, total };
    reservations.push(reservation); await writeJson('reservations.json', reservations); return reservation;
}
