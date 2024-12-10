import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import companyData from "../DB/company.json";

function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = companyData.filter(
    (company) =>
      company.category === "companies" &&
      (company.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search companies or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-container">
        {filteredData.map((company) => (
          <div className="card" key={company.company_name}>
            <img src={company.image} alt={company.company_name} />
            <h3>{company.company_name}</h3>
            <p>{company.description}</p>
            <a target="_blank" rel="noopener noreferrer" href={company.link}>
              Visit Website
            </a>
            <a target="_blank" rel="noopener noreferrer" href={company.careers}>
              Careers
            </a>
            <p>{company.location}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Companies;
