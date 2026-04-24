import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;