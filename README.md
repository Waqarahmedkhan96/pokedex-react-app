# Pokédex — React App

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Vite](https://img.shields.io/badge/Vite-purple)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)

## Live Demo

GitHub Pages Deployment:

https://waqarahmedkhan96.github.io/pokedex-react-app/

Repository:

https://github.com/Waqarahmedkhan96/pokedex-react-app

Developer LinkedIn:

https://www.linkedin.com/in/waqar-ahmed-khan-2ab2781b5/

---

## Overview

This project is a Pokédex web application developed in React using Vite and TypeScript as part of a frontend assignment.

The application allows users to browse Pokémon from PokéAPI, navigate through paginated results, search Pokémon by name, and open detailed views showing Pokémon types, abilities, height, weight, stats, and base stat total.

The project was designed with emphasis on reusable components, responsive UI, clean routing, maintainable structure, API integration, and GitHub Pages deployment.

---

## Assignment Requirements Covered

### 1. Retrieve Pokémon from a Web API

The application consumes data from PokéAPI:

https://pokeapi.co/

Pokémon data is fetched dynamically using the Fetch API.

### 2. Pagination

The Pokédex does not load all Pokémon at once.

Pagination is implemented using:

- Previous button
- Next button
- `limit`
- `offset`

Example API request:

```text
https://pokeapi.co/api/v2/pokemon?limit=12&offset=0
```

### 3. Detailed Pokémon View

Clicking a Pokémon opens a dedicated detail page showing:

- Official artwork
- Pokémon ID
- Type-colored badges
- Height
- Weight
- Abilities
- Base stats
- Base stat total

Example route:

```text
/pokemon/bulbasaur
```

### 4. Multiple Pages

The application contains:

- Home
- Pokédex
- About
- Pokémon Details

React Router is used for navigation.

### 5. Built Using Vite

The application was created using React, TypeScript, and Vite.

---

## Features

- Responsive modern interface
- Reusable React components
- Paginated Pokémon catalog
- Search Pokémon by name
- Dynamic Pokémon detail pages
- Type-colored Pokémon badges
- Base stat total display
- Loading states
- Error handling
- Mobile hamburger menu
- Developer LinkedIn call-to-action button
- GitHub Pages deployment

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

Reusable UI elements are placed in the `components` folder. Page-level views are placed in the `pages` folder. API logic is placed in the `api` folder instead of inside UI components. TypeScript interfaces are placed in the `types` folder to keep the API data structure clear and easier to maintain.

---

## User Flow

```text
Home
↓
Open Pokédex
↓
Browse Pokémon
↓
Search or use pagination
↓
Click Pokémon
↓
View detailed information
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Waqarahmedkhan96/pokedex-react-app.git
```

Enter the project folder:

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

The deployed version is hosted from the `gh-pages` branch.

---

## Responsive Design

The UI is designed for:

- Desktop
- Tablet
- Mobile

Responsive features include flexible grids, adaptive layouts, and a hamburger menu on smaller screens.

---

## Possible Future Improvements

- Filter Pokémon by type
- Add evolution chain view
- Save favorite Pokémon using localStorage
- Add previous/next Pokémon navigation on the detail page
- Add screenshots to README

---

## Learning Reflection

This project helped practice React component architecture, React Router, REST API integration, state management with hooks, TypeScript interfaces, responsive CSS, and deployment to GitHub Pages.

---

## Author

Waqar Ahmed Khan  
Software Technology Engineering Student  
VIA University College

LinkedIn:

https://www.linkedin.com/in/waqar-ahmed-khan-2ab2781b5/

---

## API Credit

Pokémon data provided by PokéAPI:

https://pokeapi.co