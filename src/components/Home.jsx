import React from 'react';

const HomePage = () => {

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1 className="hero-title">Find Companies in India</h1>
        <p className="hero-subtitle">It aims to offer a comprehensive database or directory of companies across different industries and cities in India.
        And also the all the open source projects that are available to contribute and all the open source programs are listed here
        </p>
        <div className="button-container">
          <a href="/companies" className="orange-button">Explore companies</a>
          <a href="/open-source" className="orange-button">Open Source</a>
        </div>
      </header>
      <div className="why-should-we-do-this">
      <h2 className="title">Why Should We Use This?</h2>
      <p className="description">It offers a comprehensive and user-friendly platform to explore companies in India. It provides valuable insights into the diverse business landscape, allowing us to discover a wide range of industries, sizes, and locations of companies operating in India</p>
      <ul className="benefits-list">
        <li className="benefit-item">
            Comprehensive Company Information
        </li>
        <li className="benefit-item">
            Simplified Exploration
        </li>
        <li className="benefit-item">
            Direct link to companies carrer pages
        </li>
        <li className="benefit-item">
            Easy access to open source projects
        </li>
      </ul>
    </div>
    <div className="contributors-section">
      <h2 className="contributors-title">Contributors</h2>
      <p className="contributors-description">
        Great things are never created in isolation. Thanks to our amazing contributors, we've brought this product to life.
        With your valuable support, we can continue to enhance and improve it further. If you're a developer or a tech enthusiast,
        we welcome your collaboration and ideas to create an even better experience for everyone. We are excited to hear from you!
      </p>
        <a href="" className="learn-more-button">Learn More</a>
    </div>
    </div>
  );
};

export default HomePage;
