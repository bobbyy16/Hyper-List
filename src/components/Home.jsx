import React from 'react';
import why from '../assets/why.jpg'
import openSource from '../assets/openSource.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="home-page">
        <header className="hero-section">
          <h1 className="hero-title">Find Companies in India</h1>
          <p className="hero-subtitle">
          Explore the comprehensive database of companies across various regions in India on our website, connecting you to the diverse business landscape of the nation.
            </p>
          <div className="button-container">
            <a href="/companies" className="orange-button">Explore companies</a>
          </div>
        </header>
        <div className="why-should-we-do-this">
          <div className="image-container">
            <img src={why} alt="Company" className="company-image" />
          </div>
          <div className="content">
            <div>
              <h2 className="title">Why Should We Use This?</h2>
              <p className="description">
                It offers a comprehensive and user-friendly platform to explore companies in India. It provides valuable insights into
                the diverse business landscape, allowing us to discover a wide range of industries, sizes, and locations of companies
                operating in India.
              </p>
              <div className="benefits">
                <ul className="benefits-list">
                  <li className="benefit-item">Comprehensive Company Information</li>
                  <li className="benefit-item">Simplified Exploration</li>
                  <li className="benefit-item">Direct link to companies' career pages</li>
                  <li className="benefit-item">Easy access to open source projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="why-should-we-do-this">
          <div className="content-contributors">
            <div className='m-1'>
              <div className="image-container-contributors-desktop">
                <img src={openSource} alt="Company" className="company-image" />
              </div>
              <h2 className="title">Dear Contributors</h2>
              <p className="description">
                We know that open source projects rely on the contributions of many people, and we are grateful for your willingness to give your time and skills to this project. Your contributions have helped to improve the code, fix bugs, and add new features.We are always looking for ways to improve our project, and we welcome your feedback and suggestions. If you have any ideas for how we can make the project better, please don't hesitate to share them with us.
              </p>
              <a href="https://github.com/bobbyy16/Hyper-List/blob/main/CONTRIBUTOR.md" className='btn-orange'>Learn More</a>
            </div>
          </div>
          <div className="image-container-contributors">
            <img src={openSource} alt="Company" className="company-image" />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default HomePage; 
