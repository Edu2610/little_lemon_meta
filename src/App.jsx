import React from "react";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app-grid">
      <header className="app-header">
        <div className="container">
          <Header />
        </div>
      </header>

      <nav className="app-nav">
        <div className="container">
          <Nav />
        </div>
      </nav>

      <main className="app-main">
        <div className="container">
          <Main />
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
