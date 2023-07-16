import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import companyData from '../DB/company.json'

function Open_Source() {
  const filteredData = companyData.filter(company => company.category === 'open-source');
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        {filteredData.map(company => (
          <div className="card" key={company.company_name}>
            <img src={company.image} alt={company.company_name} />
            <h3>{company.company_name}</h3>
            <p>{company.description}</p>
            <a href={company.link}>Visit Website</a>
            <a href={company.carrers}>Careers</a>
            <a href={company.github}>GitHub</a>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Open_Source


