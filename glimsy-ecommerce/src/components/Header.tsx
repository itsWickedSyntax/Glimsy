import React from "react";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="brand">
        <img src="/logo.png" alt="Glimsy logo" />
        <div>
          <div className="title">Glimsy</div>
          <div className="slogan">Light your mood, the Glimsy way!</div>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <button className="theme-toggle" aria-pressed="false" title="Toggle theme">
          🌗
        </button>
      </nav>
    </header>
  );
}