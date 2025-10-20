import React from "react";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <section style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1>Discover Glimsy candles</h1>
          <p style={{ color: "var(--muted)" }}>
            Handmade in Kuwait — small-batch scented candles that lift your mood.
          </p>
          {/* product grid / hero / checkout flow go here */}
        </section>
      </main>
    </div>
  );
}