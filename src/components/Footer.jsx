import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-box">
        Find companies in different cities Of India and Open source projects.
        <div className="footer-contact">Contact us</div>
        <div className="footer-icons">
          <a href="https://twitter.com/bobsstwt">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/bobbyy16">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-k-7597771ba/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:info@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="footer-bottom">
            Copyright &copy; HYPER-LIST {year}
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Maintained by &nbsp;
            <a target="_blank" href="https://github.com/bobbyy16" className='uppercase'>
              <b>Abhishek K</b>
            </a>
          </span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
