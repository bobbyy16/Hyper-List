import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Docs() {
  return (
    <div>
        <Navbar/>
        <div className="documentation-container">
      <h1 className='code'>Documentation:</h1>
      <p>Welcome to the documentation for our Hyper-List open-source project.</p>
      <h2 className='code'>Getting Started</h2>
      <p>
        To get started with our project using pnpm, follow these steps:
        <ol>
          <li>Star the repository</li>
          <li>Install pnpm globally by running <code className='code'>npm install -g pnpm</code>.</li>
          <li>Clone the project repository - <code className='code'>git clone git@github.com:[github-username]/Hyper-List.git</code></li>
          <li>Change into the project directory - <code className='code'>cd Hyper-List</code></li>
          <li>Install project dependencies with pnpm using <code className='code'>pnpm install</code>.</li>
          <li>Start the project locally with <code className='code'>pnpm run dev</code>.</li>
        </ol>
      </p>
      <h2 className='code'>Usage</h2>
      <p>
        The project provides several features and functionalities. Here are some examples:
        <ul>
          <li>Allows users to look for different companies in different regions of India.</li>
          <li>Allows users to find some open-source project to contribute.</li>
        </ul>
      </p>
      <h2 className='code'>Contributing</h2>
      <p>
        We welcome contributions from the community. To contribute to the project, follow these guidelines:
        <ol>
          <li>Star the repository.</li>
          <li>Fork the project repository.</li>
          <li>Create a new branch for your feature or bug fix.</li>
          <li>We are using two different section in this project - <span className='code'> Companies and Open-Source</span>
          </li>
          <li>To add <span className="code">Companies</span> use:
            <code>
              <span className='data'>"company_name" : "company_name",</span>
              <span className='data'>"category": "companies",</span>
              <span className='data'>"image" : "Image of the company",</span>
              <span className='data'>"description" : "description of that company",</span>
              <span className='data'>"link": "Link of the company",</span>
              <span className='data'>"carrers" : "carrers page",</span>
              <span className='data'>"location" : "location of the company"</span>
            </code>
          </li>
          <li>Make your changes and commit them using <code className='code'>git commit -m "[your message]"</code></li>
          <li>Submit a pull request with a detailed description of your changes.</li>
        </ol>
      </p>
    </div>
        <Footer/>
    </div>
  )
}

export default Docs
