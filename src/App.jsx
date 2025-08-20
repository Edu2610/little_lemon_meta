import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only sr-only-focusable">Saltar al contenido</a>

      <div className="app-grid">
        <header className="app-header">
          <div className="header-inner container">
            <Header />
          </div>
        </header>

        <nav className="app-nav" aria-label="Navegación principal">
          <div className="container">
            <Nav />
          </div>
        </nav>

        <main id="contenido" className="app-main">
          <div className="container">
            <Main />
          </div>
        </main>

        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
