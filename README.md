# Pokédex — React Assignment 2
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Vite](https://img.shields.io/badge/Vite-purple)

## Live Demo

GitHub Pages Deployment:

https://waqarahmedkhan96.github.io/pokedex-react-app/

Repository:

https://github.com/Waqarahmedkhan96/pokedex-react-app

---

## Overview

This project is a Pokédex web application developed in React using Vite and TypeScript as part of a frontend assignment.

The application allows users to browse Pokémon retrieved from the PokéAPI, navigate through paginated results, and open detailed views showing information such as Pokémon types, abilities, height, weight and stats.

The project was designed with emphasis on:

- reusable components  
- responsive UI  
- clean routing  
- maintainable code structure  
- API integration using modern React practices

---

## Assignment Requirements Covered

This solution fulfills all assignment requirements.

### 1. Retrieve Pokémon from a Web API

The application consumes data from:

https://pokeapi.co/

Pokémon data is fetched dynamically using the Fetch API.

---

### 2. Pagination

The Pokédex does not load all Pokémon at once.

Pagination is implemented using:

- Previous button  
- Next button

PokéAPI query parameters:

```text
limit
offset
```

Example:

```text
https://pokeapi.co/api/v2/pokemon?limit=12&offset=0
```

This follows the assignment requirement for paginated browsing.

---

### 3. Detailed Pokémon View

Clicking a Pokémon opens a dedicated detail page showing:

- Official artwork  
- Pokémon ID  
- Type(s)  
- Height  
- Weight  
- Abilities  
- Base stats  

Example route:

```text
/pokemon/bulbasaur
```

Dynamic routing is handled with React Router.

---

### 4. Multiple Pages

The application contains multiple pages:

- Home  
- Pokédex  
- About  
- Pokémon Details

React Router is used for navigation.

---

### 5. Built Using Vite

The application was created using:

React + TypeScript + Vite

---

## Features

- Responsive modern interface  
- Reusable React components  
- Paginated Pokémon catalog  
- Dynamic detail pages  
- Loading states  
- Error handling  
- Mobile responsive hamburger menu  
- GitHub Pages deployment

---

## Screenshots

### Home Page
(Add screenshot here)

### Pokédex Page
(Add screenshot here)

### Pokémon Details Page
(Add screenshot here)

---

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- CSS
- PokéAPI
- GitHub Pages

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

The application follows separation of concerns.

### Components

Reusable UI elements were separated into components:

- Navbar  
- Footer  
- Pokémon Card  
- Pagination  

This avoids duplication and improves maintainability.

---

### API Layer

API logic was placed in:

```text
src/api/
```

instead of embedding fetch logic inside UI components.

This keeps code organized and scalable.

---

### Type Safety

TypeScript interfaces were used to model:

- Pokémon list responses  
- Pokémon detail responses

This improves reliability and readability.

---

## User Flow

```text
Home
↓
Open Pokédex
↓
Browse Pokémon
↓
Use Next / Previous
↓
Click Pokémon
↓
View Details
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/Waqarahmedkhan96/pokedex-react-app.git
```

Enter project:

```bash
cd pokedex-react-app
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## Deployment

Deployment is configured using GitHub Pages.

Deploy command:

```bash
npm run deploy
```

Hosted through:

```text
gh-pages branch
```

---

## Error Handling

Includes handling for:

- API request failures  
- Loading states  
- Invalid responses

---

## Responsive Design

Designed for:

- Desktop  
- Tablet  
- Mobile

Includes:

- Responsive grids  
- Mobile navigation  
- Adaptive layouts

---

## Possible Future Improvements

Possible enhancements:

- Search Pokémon by name  
- Filter by type  
- Evolution chain view  
- Favorite Pokémon using localStorage  
- Type-based badge colors  
- Previous / next Pokémon navigation in details view

---

## Learning Reflection

This project provided practice in:

- React component architecture  
- React Router  
- Fetching REST API data  
- State management with hooks  
- Responsive frontend development  
- Deploying a React application to GitHub Pages

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