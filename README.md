# Airbnb-Inspired Full-Stack Listing Experience

A full-stack Airbnb-inspired property listing application built with **React + Vite** on the frontend and **Node.js + Express** on the backend.

The project was developed by studying the supplied reference video and reproducing its main desktop listing-page flow, layout, visual structure, photo experience, booking area, reviews, amenities, host information, location section, and nearby-stays sections.

> **Note:** This is an educational/reference implementation and is not affiliated with or endorsed by Airbnb.

---

##  Project Overview

The application presents a detailed property listing for:

**Romantic Jacuzzi 1BHK Candolim | Mirashya UG10**

The page is organized as a long-form property experience similar to the supplied reference:

1. Header with Airbnb-style branding and centered search pill
2. Property title with Share and Save actions
3. Five-image property gallery
4. Listing introduction and guest-favourite information
5. Host information and property highlights
6. Translation/description area
7. Where you'll sleep
8. Sticky section navigation while scrolling
9. Desktop reservation card
10. Amenities section with a full amenities modal
11. October/November 2026 calendar display
12. Guest-favourite reviews and rating categories
13. Location/map-style section
14. Host and co-host section
15. Things to know / house information
16. Nearby stays carousel-style section
17. Full Photo Tour with categorized photo sections
18. Image/lightbox infrastructure for photo viewing

---

##  Technologies Used

### Frontend

- React 18
- Vite
- JavaScript / JSX
- CSS
- Lucide React icons
- Font Awesome React packages
- Fetch API

### Backend

- Node.js
- Express.js
- CORS
- REST-style API endpoints
- JSON files for local persistence

### Development Tools

- VS Code
- npm
- Git / GitHub
- Vite development server
- AI-assisted development for planning, debugging, refactoring and visual refinement

---

##  Project Structure

```text
airbnb-clone-exact-video-structure/
│
├── backend/
│   ├── data/
│   │   ├── amenities.json
│   │   ├── availability.json
│   │   ├── listing.json
│   │   ├── nearby.json
│   │   ├── photos.json
│   │   ├── reservations.json
│   │   ├── reviews.json
│   │   └── state.json
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   └── listingController.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── repositories/
│   │   │   └── jsonRepository.js
│   │   ├── routes/
│   │   │   └── listingRoutes.js
│   │   ├── services/
│   │   │   └── listingService.js
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       └── property images and UI assets
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Amenities.jsx
│   │   │   ├── AmenitiesModal.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   ├── CalendarSection.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HostSection.jsx
│   │   │   ├── LeafIcon.jsx
│   │   │   ├── Lightbox.jsx
│   │   │   ├── ListingIntro.jsx
│   │   │   ├── LocationSection.jsx
│   │   │   ├── NearbyStays.jsx
│   │   │   ├── PhotoTour.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   ├── StickyNav.jsx
│   │   │   ├── ThingsToKnow.jsx
│   │   │   └── WhereSleep.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│   ├── AI_PROMPTS.md
│   ├── API.md
│   └── architecture.md
│
├── package.json
└── README.md
```

---

##  How the Application Works

The React frontend loads listing information from the Express backend.

```text
React Frontend
      │
      │ HTTP requests
      ▼
Express REST API
      │
      ▼
JSON data files
      │
      ├── Listing
      ├── Photos
      ├── Reviews
      ├── Amenities
      ├── Availability
      ├── Nearby stays
      ├── Favourite state
      └── Reservations
```

The frontend does not hard-code all listing information directly into the page. It requests the main listing data, photos, reviews, amenities, nearby stays and favourite state from the backend.

---

#  Getting Started

## 1. Requirements

Install the following before running the project:

- Node.js
- npm
- VS Code or another code editor
- A modern desktop browser

Check Node.js and npm:

```bash
node -v
npm -v
```

---

## 2. Open the project

Open the project root:

```text
airbnb-clone-exact-video-structure
```

---

## 3. Install root dependencies

```bash
npm install
```

Then install frontend and backend dependencies:

```bash
npm run install:all
```

---

## 4. Start the application

Run both servers with:

```bash
npm run dev
```

The application uses:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:4000
```

Open the frontend in your browser:

```text
http://localhost:5173
```

---

##  Run Frontend and Backend Separately

If required, the servers can also be started individually.

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend:

```text
http://localhost:4000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

#  API Endpoints

Base URL:

```text
http://localhost:4000/api
```

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Check backend status |
| GET | `/listing` | Get property/listing information |
| GET | `/photos` | Get listing photos |
| GET | `/reviews` | Get review information |
| GET | `/amenities` | Get amenities |
| GET | `/nearby` | Get nearby stays |
| GET | `/availability` | Get availability data |
| GET | `/favorite` | Get favourite state |
| POST | `/favorite` | Update favourite state |
| GET | `/search?q=...` | Search listing/photo information |
| POST | `/reservations` | Create a reservation |

---

#  Backend Data

For this assignment implementation, JSON files are used instead of a database.

### `listing.json`

Stores the main property information such as:

- Property title
- Location
- Price
- Promotion information
- Host/listing information

### `photos.json`

Stores photo metadata such as:

- Photo ID
- Image source
- Category
- Alt text

### `reviews.json`

Stores review and rating information.

### `amenities.json`

Stores amenities grouped by category.

### `nearby.json`

Stores nearby property information.

### `availability.json`

Stores availability-related data.

### `state.json`

Stores the current favourite state.

### `reservations.json`

Stores reservations created through the booking API.

---

#  Main Frontend Components

## Header

Provides:

- Airbnb-style logo area
- Location search
- Date search display
- Guest counter
- Search interaction
- Become a host action
- Language icon
- Profile/menu controls

## Gallery

Displays the main five-photo property gallery with:

- Hero image
- Additional property images
- Share button
- Save/favourite button
- Show-all-photos action

## ListingIntro

Displays the main property information and introductory content.

## BookingCard

Contains the reservation area with:

- Price
- Check-in
- Check-out
- Guest count
- Cancellation information
- Reserve button
- Price calculation

The frontend calculates the stay duration and estimated price before sending the reservation request to the backend.

## Amenities

Displays the property's main amenities.

## AmenitiesModal

Opens a larger modal containing amenities grouped by category.

## CalendarSection

Displays the October and November 2026 calendar presentation used by the reference design.

## ReviewsSection

Displays:

- Overall rating
- Review categories
- Rating bars
- Review information

## LocationSection

Provides the property location section with a map-style presentation.

## HostSection

Displays host and co-host information.

## ThingsToKnow

Contains important property/house information.

## NearbyStays

Displays additional nearby property cards in a carousel-style layout.

## PhotoTour

Provides a full-page categorized photo experience.

Photo categories include:

- Living room
- Kitchen
- Bedroom
- Bathroom
- Gym
- Exterior
- Pool
- Additional photos

## Lightbox

Provides the structure for viewing photos in an enlarged overlay with previous/next controls.

---

#  Favourite Feature

The Save/Favourite action communicates with the backend.

Frontend:

```text
POST /api/favorite
```

The current favourite state is stored in:

```text
backend/data/state.json
```

This demonstrates frontend-to-backend state persistence without requiring a database.

---

#  Search Feature

The header provides a search interaction.

The frontend sends:

```text
GET /api/search?q=...
```

The backend checks the search text against the listing title and photo category/alt information.

The result is returned to the frontend and used to show a search status message.

---

#  Reservation Flow

The reservation flow is:

```text
Select check-in/check-out
          ↓
Calculate number of nights
          ↓
Calculate subtotal
          ↓
Add cleaning fee
          ↓
Add 14% service fee
          ↓
POST reservation
          ↓
Backend validates minimum stay
          ↓
Reservation stored in reservations.json
          ↓
Reservation ID returned
```

The backend applies a minimum stay validation of **5 nights**.

The current calculation includes:

```text
Subtotal = nightly price × number of nights

Cleaning fee = ₹1,500

Service fee = 14% of subtotal

Total = subtotal + cleaning fee + service fee
```

---

#  UI / Visual Design

The interface was refined around the supplied reference video, focusing on:

- Desktop-first layout
- Airbnb-inspired typography and spacing
- Rounded cards
- Large property gallery
- Sticky navigation
- Sticky booking column
- Modal overlays
- Photo-tour layout
- Rating/review presentation
- Nearby property cards
- Consistent icon usage
- Responsive CSS structure

The implementation uses original React/CSS code rather than copying source code from the reference website.

---

#  Image Assets

Property images are stored locally under:

```text
frontend/public/assets/
```

This allows the project to run without depending on external image URLs for the main property experience.

The asset collection contains property photos for areas such as:

- Living room
- Bedroom
- Kitchen
- Bathroom
- Jacuzzi
- Pool
- Gym
- Exterior
- Nearby stays
- Additional photos

---

#  AI-Assisted Development

AI tools were used as development assistance for tasks such as:

- Understanding the assignment requirements
- Breaking the reference video into UI sections
- Planning the React component structure
- Designing the Express API
- Debugging JavaScript/React issues
- Improving CSS layout and spacing
- Creating reusable components
- Reviewing accessibility considerations
- Checking project structure
- Preparing documentation

The project code was reviewed and integrated into the working application rather than treating AI output as a complete replacement for development work.

See:

```text
docs/AI_PROMPTS.md
```

for the prompt sequence used during development.

---

#  Documentation

Additional project documentation is available in:

```text
docs/API.md
```

API endpoint reference.

```text
docs/architecture.md
```

Production-scale architecture and scaling considerations.

```text
docs/AI_PROMPTS.md
```

AI-assisted development prompt sequence.

---

#  Production Architecture

The local assignment version intentionally uses JSON files to keep setup simple.

A production deployment could replace the local JSON repository with:

```text
React / Vite
      ↓
CDN / Edge
      ↓
API Gateway / Load Balancer
      ↓
Node.js services
      ↓
PostgreSQL
      ↓
Redis / Cache
      ↓
Object Storage + CDN
      ↓
Search Index
```

The project includes a production-scale architecture discussion in:

```text
docs/architecture.md
```

---

#  Testing Checklist

Before submission, verify:

- [ ] `npm install` completes successfully
- [ ] `npm run install:all` installs frontend/backend dependencies
- [ ] `npm run dev` starts both servers
- [ ] Frontend opens on port 5173
- [ ] Backend responds on port 4000
- [ ] Listing data loads
- [ ] Property photos load
- [ ] Save/Favourite works
- [ ] Share action works where browser support is available
- [ ] Search interaction works
- [ ] Booking calculation updates with dates
- [ ] Reservation API accepts valid stays
- [ ] Reservation API rejects stays below 5 nights
- [ ] Amenities modal opens
- [ ] Photo Tour opens
- [ ] Reviews section is visible
- [ ] Nearby stays are displayed
- [ ] Browser console has no blocking errors

---

#  Important Implementation Notes

This is a **take-home/reference-video implementation**, so some areas are intentionally simplified compared with a production Airbnb platform.

Examples:

- JSON files are used instead of PostgreSQL.
- There is no real user authentication system.
- The map section is a visual/map-style section rather than a live map integration.
- The calendar presentation is primarily designed to reproduce the reference layout.
- Some search and UI interactions are lightweight demonstrations rather than a complete marketplace search engine.
- Reservation data is stored locally in JSON.
- The application is primarily designed around the supplied desktop reference flow.

---

#  Project Purpose

The main goal of this project is to demonstrate the ability to:

- Analyze an existing UI/reference video
- Convert a visual design into reusable React components
- Build a frontend/backend architecture
- Create REST API endpoints
- Connect React to an Express backend
- Manage application state
- Implement booking calculations
- Persist data locally
- Build modal and photo experiences
- Organize a full-stack project for submission
- Use AI tools responsibly during software development

---

## License

This project is intended for educational, portfolio, and assignment purposes.
