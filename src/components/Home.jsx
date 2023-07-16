import React from 'react';
import why from '../assets/why.jpg'
import openSource from '../assets/openSource.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {

  return (
    <>
        <Navbar/>
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
    </div>
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
<div className="why-should-we-do-this">
  <div className="content-contributors">
    <div className='m-1'>
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
<Footer/>
    </>
    
  );
};

export default HomePage; 
