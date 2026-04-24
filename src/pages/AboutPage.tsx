function AboutPage() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>About this project</h1>
        <p>
          This Pokédex was created as a React assignment using Vite, TypeScript,
          React Router and PokéAPI.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-box">
          <h2>Features</h2>
          <ul>
            <li>Fetches real Pokémon data from PokéAPI</li>
            <li>Displays Pokémon in a responsive grid</li>
            <li>Supports next and previous pagination</li>
            <li>Shows a detailed page for each Pokémon</li>
            <li>Uses React Router for multiple pages</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>Technologies</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>TypeScript</li>
            <li>React Router</li>
            <li>CSS</li>
            <li>PokéAPI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;