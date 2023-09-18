import React from 'react';
import '../css/Homepage.css'; // Import your CSS for the homepage
import PageHeader from './pageHeader';

function Homepage() {
  return (
    <div className="homepage-container">
      <PageHeader/>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Wiley</h1>
          <p>Your source for educational materials and more.</p>
          <a href="/search?query=&sort=rel&page=1&size=5" className="cta-button">Explore Products</a>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Display featured products here */}
      </section>

      <footer className="footer">
        <p>&copy; 2023 Wiley. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;