import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">MODAL<span>UI.</span></h2>

        <button
          className="nav-btn"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <span className="badge">✨ MODERN REACT UI</span>

          <h1>
            Design Your
            <br />
            <span>Digital Experience.</span>
          </h1>

          <p>
            Beautiful interfaces. Smooth interactions.
            A better experience starts with a single click.
          </p>

          <button
            className="primary-btn"
            onClick={() => setShowModal(true)}
          >
            Explore Now <span>→</span>
          </button>

          <div className="features">
            <div>
              <strong>01</strong>
              <span>Modern Design</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Smooth Animation</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Responsive UI</span>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="modal-icon">✦</div>

            <span className="modal-tag">WELCOME ABOARD</span>

            <h2>Let's Get Started!</h2>

            <p>
              You're just one step away from exploring
              something amazing. Ready to begin?
            </p>

            <button
              className="modal-primary"
              onClick={() => setShowModal(false)}
            >
              Let's Go <span>→</span>
            </button>

            <button
              className="modal-secondary"
              onClick={() => setShowModal(false)}
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;