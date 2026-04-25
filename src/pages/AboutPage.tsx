function AboutPage() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>About this project</h1>
        <p>
          This Pokédex was created as a React assignment using Vite, TypeScript,
          React Router and PokéAPI. The goal was to build a clean, responsive
          frontend application that fetches real data from an external API.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-box">
          <h2>Features</h2>
          <ul>
            <li>Fetches real Pokémon data from PokéAPI</li>
            <li>Displays Pokémon in a responsive grid</li>
            <li>Supports next and previous pagination</li>
            <li>Allows searching Pokémon by name</li>
            <li>Shows a detailed page for each Pokémon</li>
            <li>Uses type-colored badges</li>
            <li>Shows base stat total</li>
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
            <li>GitHub Pages</li>
          </ul>
        </div>
      </div>

      <div className="contact-card">
        <div>
          <p className="eyebrow">Developer</p>
          <h2>Built by Waqar Ahmed Khan</h2>
          <p>
            Software Technology Engineering student with interest in frontend
            development, full-stack systems and data analytics.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/waqar-ahmed-khan-2ab2781b5/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-button"
        >
          View LinkedIn Profile
        </a>
      </div>
    </section>
  );
}

export default AboutPage;