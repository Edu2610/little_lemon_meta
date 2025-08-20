export default function App() {
  return (
    <>
      {/* Skip link para teclado */}
      <a href="#contenido" className="sr-only sr-only-focusable">
        Saltar al contenido
      </a>

      <header>
        <h1 className="visually-hidden">Little Lemon</h1>
        {/* tu logo acá */}
      </header>

      <nav aria-label="Navegación principal">
        {/* <Nav /> */}
      </nav>

      <main id="contenido">
        {/* <Main /> */}
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
