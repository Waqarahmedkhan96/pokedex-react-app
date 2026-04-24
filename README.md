# Pokédex — React Assignment 2

## Overview

This project is a Pokédex web application developed in React using Vite and TypeScript as part of a frontend assignment.

The application allows users to browse Pokémon retrieved from the PokéAPI, navigate through paginated results, and open detailed views showing information such as Pokémon types, abilities, height, weight, and stats.

The project was built with a focus on clean structure, reusable components, responsive design, and clear routing using React Router.

---

## Assignment Requirements Covered

This solution fulfills all required assignment criteria:

### Retrieve Pokémon from Web API
The application uses data from:

https://pokeapi.co/

Pokémon data is fetched dynamically using the Fetch API.

---

### Pagination
The Pokédex does not load all Pokémon at once.

It uses simple pagination with:

- Previous button  
- Next button  

Data is loaded in pages using:

- limit
- offset

This improves usability and follows assignment requirements.

---

### Detailed Pokémon View
Clicking a Pokémon opens a dedicated details page displaying:

- Official artwork  
- Pokémon ID  
- Type(s)  
- Height  
- Weight  
- Abilities  
- Base stats  

Routing is handled dynamically using URL parameters.

Example:

```text
/pokemon/bulbasaur
```

---

### Multiple Pages with React Router
The application contains multiple pages:

- Home  
- Pokédex  
- Pokémon Details  
- About  

React Router is used for navigation.

---

### Built with Vite
The project was created using Vite with React + TypeScript.

---

## Features

- Responsive modern UI
- Reusable React components
- API data fetching
- Loading states
- Error handling
- Paginated browsing
- Dynamic detail pages
- Mobile-friendly navigation
- Hamburger menu on smaller screens

---

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- CSS
- PokéAPI

---

## Project Structure

```text
src/
│
├── api/
│   └── pokemonApi.ts
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PokemonCard.tsx
│   ├── Pagination.tsx
│   └── Loading.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── PokedexPage.tsx
│   ├── PokemonDetailsPage.tsx
│   └── AboutPage.tsx
│
├── types/
│   └── pokemon.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Design Approach

The project was structured around separation of concerns.

### Components
Reusable UI elements were isolated into components such as:

- Navbar  
- Footer  
- Pokémon Card  
- Pagination  

This avoids duplication and improves maintainability.

---

### Pages
Application views were separated into pages to support routing and keep responsibilities clear.

---

### API Layer
API calls were placed in a separate `api` folder rather than inside components, keeping fetching logic organized.

---

### Type Safety
TypeScript interfaces were used to model:

- Pokémon list data
- Pokémon detail data

This improves readability and reduces errors.

---

## How Pagination Works

PokéAPI supports pagination using query parameters.

Example:

```text
https://pokeapi.co/api/v2/pokemon?limit=12&offset=0
```

- limit controls how many Pokémon appear per page  
- offset controls where the next page starts

The application updates the offset when users press next or previous.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex.git
```

Move into project folder:

```bash
cd pokedex
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Deployment

This project is intended to be deployed to GitHub Pages.

Deployment can be done using:

```bash
npm run deploy
```

(After GitHub Pages configuration.)

---

## Example User Flow

```text
Home
↓
Open Pokédex
↓
Browse Pokémon
↓
Use Next / Previous Pagination
↓
Click Pokémon
↓
View Detailed Information
```

---

## Error Handling

The application includes basic error handling for:

- Failed API requests  
- Invalid responses  
- Loading states while data is fetched

This improves user experience.

---

## Responsive Design

The UI adapts to:

- Desktop  
- Tablet  
- Mobile  

Responsive features include:

- Flexible grid layout  
- Single-column mobile layouts  
- Mobile hamburger navigation

---

## Possible Future Improvements

Potential enhancements:

- Search Pokémon by name  
- Filter by type  
- Evolution chain view  
- Favorite Pokémon using local storage  
- Type-based color themes  
- Next/Previous Pokémon navigation on detail page

---

## Learning Reflection

This project helped practice:

- React component architecture  
- Routing with React Router  
- API integration  
- State management with hooks  
- Responsive frontend design  
- Structuring a small React application professionally

---

## Author

Waqar Ahmed Khan

Software Technology Engineering Student  
VIA University College

---

## API Credit

Pokémon data provided by:

PokéAPI  
https://pokeapi.co