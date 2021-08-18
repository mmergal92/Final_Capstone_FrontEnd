import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-top">
      </section>
      <section className="footer-middle">
        <div className ="left-footer">
        <a href ="https://www.itsproof.co/" target="_blank" rel="noopener noreferrer">Proof Agency</a>
          <a href ="https://www.instagram.com/pillsmergs/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className ="center-footer">
        <Link to={`/about/`}>
           <h6>About Us</h6>
          </Link>
          maria@itsproof.co
        </div>
        <div className ="right-footer">
        <Link to={`/form/`}>
           <h6>Inquiry Form</h6>
          </Link>
          Terms + Conditions
        </div>
      </section>
      <section className="footer-bottom">
        <h6>&copy; Maria Mergal. 2021</h6>
      </section>
    </section>
  );
}

export default Footer;
