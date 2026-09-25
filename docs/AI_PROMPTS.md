# AI Prompts Used During Development

This document records representative AI prompts used to plan, build, debug, refine, and document the Airbnb-inspired full-stack project.

The prompts are grouped by development stage so that the AI-assisted workflow is clear and reproducible.

---

## 1. Understand the Assignment

### Prompt

```text
Read the complete Airbnb clone assignment carefully. Extract the actual
requirements from the assignment and separate them into:

1. UI requirements
2. Functional requirements
3. Frontend requirements
4. Backend requirements
5. Accessibility requirements
6. Architecture/documentation requirements
7. Final submission requirements

Do not invent features that are not required.
```

### Purpose

Used to convert the assignment into an implementation checklist before writing code.

---

## 2. Analyze the Reference Video

### Prompt

```text
Analyze the supplied reference video as a UI and interaction reference.

Break the page into sections in the exact order in which they appear.
For each section identify:

- approximate layout
- important text/content
- buttons and controls
- images
- cards
- sticky elements
- modals or overlays
- scrolling behavior
- booking interactions
- photo interactions
- review sections
- nearby listings
- responsive/desktop behavior

Create a component-level implementation plan for React.

Do not copy source code from the reference website.
Use the video only as a visual and behavioral reference.
```

### Purpose

Used to turn the reference recording into a React component hierarchy.

---

## 3. Plan the Full-Stack Architecture

### Prompt

```text
Design a clean full-stack architecture for an Airbnb-inspired property
listing page.

Use:
- React + Vite for the frontend
- Node.js + Express for the backend

The backend should provide APIs for:
- listing information
- photos
- reviews
- amenities
- nearby stays
- availability
- favourite state
- search
- reservations

For the local assignment version, use JSON files instead of a database.

Separate routes, controllers, services and repository/data-access logic.
Also explain how this design could be migrated to PostgreSQL and Redis in
a production environment.
```

### Purpose

Used to establish the frontend/backend structure and keep business logic separated.

---

## 4. Create the React Component Structure

### Prompt

```text
Create a reusable React component structure for the property listing page.

Suggested sections:
- Header
- Gallery
- ListingIntro
- WhereSleep
- Amenities
- CalendarSection
- ReviewsSection
- LocationSection
- HostSection
- ThingsToKnow
- NearbyStays
- BookingCard
- StickyNav
- PhotoTour
- Lightbox
- AmenitiesModal

Keep App.jsx responsible mainly for page composition and shared state.
Avoid putting the complete page UI into one component.
```

### Purpose

Used to break the large page into maintainable components.

---

## 5. Build the Express API

### Prompt

```text
Create an Express.js REST API for an Airbnb-inspired property listing.

Use ES modules.

Create:
- routes
- controllers
- services
- JSON repository

Required endpoints:

GET /api/health
GET /api/listing
GET /api/photos
GET /api/reviews
GET /api/amenities
GET /api/nearby
GET /api/availability
GET /api/favorite
POST /api/favorite
GET /api/search?q=...
POST /api/reservations

Use JSON files as the local data store.
Add basic error handling and CORS.
```

### Purpose

Used to create the backend API layer.

---

## 6. Connect React to the Backend

### Prompt

```text
Create a small frontend API helper for the React application.

Use fetch() and a shared BASE API URL.

Create functions for:
- listing
- photos
- reviews
- amenities
- nearby
- availability
- favorite
- updating favorite
- search
- reservations

Handle non-2xx responses by reading the backend error message and
throwing a JavaScript Error.
```

### Purpose

Used to avoid repeating fetch logic throughout the React components.

---

## 7. Implement the Booking Calculation

### Prompt

```text
Implement a React booking card.

The card should contain:
- check-in date
- check-out date
- guest count
- nightly price
- cleaning fee
- service fee
- total
- Reserve button

Calculate the number of nights dynamically.

Use:
subtotal = nightly price * nights
cleaning fee = 1500
service fee = 14% of subtotal
total = subtotal + cleaning fee + service fee

When Reserve is clicked, send the reservation data to:
POST /api/reservations

Keep the UI calculation and backend validation consistent.
```

### Purpose

Used to implement the main booking calculation and API interaction.

---

## 8. Add Minimum-Stay Validation

### Prompt

```text
Add backend validation for reservations.

The minimum stay must be 5 nights.

Calculate the number of nights from check-in and check-out dates on the
server rather than trusting the client.

If the stay is less than 5 nights, return HTTP 400 with a clear error
message.

For valid reservations:
- calculate subtotal
- calculate cleaning fee
- calculate 14% service fee
- calculate total
- generate a reservation ID
- save the reservation to reservations.json
- return the created reservation
```

### Purpose

Used to make the important reservation rule server-side rather than relying only on the browser.

---

## 9. Implement Save/Favourite State

### Prompt

```text
Implement a Save/Favourite feature.

The React frontend should:
1. Load the current favourite state from GET /api/favorite.
2. Toggle the state when the user clicks Save.
3. Send the new value to POST /api/favorite.
4. Update the button label between Save and Saved.
5. Show a small confirmation message.

Persist the state in a local JSON file on the backend.
```

### Purpose

Used to demonstrate frontend-to-backend state persistence.

---

## 10. Implement Header Search

### Prompt

```text
Build an Airbnb-inspired desktop search pill with:

- Anywhere
- Anytime
- Add guests
- Search button

When the guest control is opened, display a small popover with a guest
counter.

Allow the user to enter a search query and call:
GET /api/search?q=query

The backend should search listing title and photo category/alt text.

Keep the interaction simple and suitable for the assignment rather than
building a complete marketplace search engine.
```

### Purpose

Used to reproduce the reference header interaction while keeping the implementation manageable.

---

## 11. Build the Property Gallery

### Prompt

```text
Create a five-image property gallery similar to the supplied reference.

Requirements:
- one large hero image
- four supporting images
- rounded corners
- consistent spacing
- Show all photos button on the final image
- Share button
- Save/Favourite button

Use the photo data returned by the backend rather than hard-coding
external image URLs.
```

### Purpose

Used for the main visual section of the listing page.

---

## 12. Build the Photo Tour

### Prompt

```text
Create a full-page Photo Tour React component.

Organize the property photos into categories:
- Living room
- Kitchen
- Bedroom
- Full bathroom
- Gym
- Exterior
- Pool
- Additional photos

At the top, show category thumbnails.
Clicking a category should navigate to its section.

Each category should contain a heading, description and image layout.

Use the existing photo data and local assets.
```

### Purpose

Used to reproduce the long photo-tour experience from the reference.

---

## 13. Add a Lightbox

### Prompt

```text
Create a reusable React lightbox for the property photos.

Requirements:
- full-screen overlay
- close button
- previous button
- next button
- current image
- image counter
- wrap from first image to last and last to first

Use semantic buttons and accessible labels.

Also add keyboard support for:
ArrowLeft
ArrowRight
Escape
```

### Purpose

Used to define the photo viewing interaction and accessibility behavior.

---

## 14. Build the Amenities Modal

### Prompt

```text
Create an amenities modal in React.

The backend returns amenities grouped by category.

Display:
- category heading
- each amenity item
- close button

The modal should appear over a darkened backdrop and remain visually
consistent with the rest of the property page.

Use the backend data instead of hard-coding all amenities in the component.
```

### Purpose

Used to make the amenities area data-driven.

---

## 15. Improve the Sticky Navigation

### Prompt

```text
Create a sticky section navigation for the desktop listing page.

Sections:
- Photos
- Amenities
- Reviews
- Location

When the user scrolls:
- show the navigation after the gallery leaves the viewport
- detect the currently visible section
- update the active navigation item

When a navigation item is selected, scroll smoothly to that section.
```

### Purpose

Used to reproduce the reference page's scrolling/navigation behavior.

---

## 16. Improve the CSS Layout

### Prompt

```text
Review the current styles.css for the Airbnb-inspired listing page.

The page currently looks too large and spaced out.

Make the desktop layout more compact and closer to the supplied reference.

Focus on:
- max-width
- horizontal page padding
- gallery height
- gallery gap
- typography sizes
- section spacing
- booking card width
- card padding
- border radius
- button dimensions
- sticky navigation height

Do not change the React functionality.
Give only the CSS changes required.
```

### Purpose

Used during visual refinement when the layout needed to become more compact.

---

## 17. Fix Image Loading

### Prompt

```text
Inspect the React components and local asset paths.

Some property images are not loading.

Check:
- public asset directory
- image filenames
- case sensitivity
- spaces in filenames
- React image src values
- fallback paths

Identify the exact reason an image is missing and provide the smallest
code change needed to fix it.

Do not replace working images unnecessarily.
```

### Purpose

Used to debug local image paths and missing assets.

---

## 18. Fix React/CSS Component Issues

### Prompt

```text
Review this React component and its related CSS.

Find:
- incorrect JSX attributes
- incorrect className usage
- unused imports
- invalid HTML attributes
- layout issues
- missing alt text
- event handling problems

Explain each issue briefly and then provide the corrected component.

Do not rewrite unrelated parts of the project.
```

### Purpose

Used for targeted debugging instead of rewriting entire files.

---

## 19. Improve Accessibility

### Prompt

```text
Review the property listing UI for basic accessibility.

Check:
- button semantics
- aria-labels
- image alt text
- keyboard interaction
- focus-visible states
- modal semantics
- Escape key handling
- clear interactive controls

Keep the visual design unchanged as much as possible.
Provide only practical improvements relevant to this project.
```

### Purpose

Used to improve accessibility without changing the visual design unnecessarily.

---

## 20. Review the Complete Project

### Prompt

```text
Review the complete Airbnb-inspired React + Express project.

Check the following:

1. Project structure
2. Frontend startup
3. Backend startup
4. API routes
5. API/frontend connection
6. JSON data access
7. Reservation calculation
8. Minimum-stay validation
9. Favourite persistence
10. Search behavior
11. Photo Tour
12. Amenities modal
13. Gallery
14. Sticky navigation
15. CSS organization
16. Image paths
17. Accessibility
18. Documentation

Identify only real issues that exist in the provided code.
Do not invent problems.
For every issue, give:
- file name
- problem
- why it matters
- exact fix
```

### Purpose

Used as a final development and debugging review.

---

## 21. Prepare the README

### Prompt

```text
Read the complete project structure and source code.

Create a professional README for a full-stack React + Express assignment.

Include:
- project overview
- features
- technology stack
- folder structure
- setup instructions
- frontend/backend ports
- API endpoints
- data storage approach
- major React components
- reservation calculation
- favourite feature
- search feature
- photo tour
- architecture
- testing checklist
- known simplifications
- AI-assisted development documentation

Only document functionality that actually exists in the project.
Do not claim that a feature is fully implemented if it is only a visual
placeholder.
```

### Purpose

Used to generate documentation based on the actual implementation rather than assumptions.

---

# AI-Assisted Development Workflow

The overall workflow was:

```text
Assignment
    ↓
Requirement extraction
    ↓
Reference video analysis
    ↓
Component planning
    ↓
Backend/API planning
    ↓
React implementation
    ↓
Backend implementation
    ↓
Frontend ↔ Backend integration
    ↓
Functional testing
    ↓
CSS/visual refinement
    ↓
Bug fixing
    ↓
Accessibility review
    ↓
Project documentation
```

---

# Responsible Use of AI

AI was used as a development assistant for:

- Planning
- Code generation for individual components
- Debugging
- CSS refinement
- API design
- Documentation
- Code review
- Accessibility suggestions

The generated suggestions were reviewed, adapted and integrated into the project during development.

The reference video was treated as a visual/behavioral reference. The implementation uses its own React, JavaScript and CSS code rather than copying the source code of the referenced website.
