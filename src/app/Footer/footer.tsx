import React from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../Footer/footer.css";

export default function Footers() {
  return (
    <footer className="ftr">
      <div className="container1">
        {/* Section 1: Company & Links */}
        <section className="sec1">
          <div className="row">
            <div className="colm1">
              <h4>Company Name</h4>
              <p>
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="colm2">
              <h4>Products</h4>
              <p><a href="#">MDBootstrap</a></p>
              <p><a href="#">MDWordPress</a></p>
              <p><a href="#">BrandFlow</a></p>
              <p><a href="#">Bootstrap Angular</a></p>
            </div>

            <div className="colm3">
              <h4>Useful Links</h4>
              <p><a href="#">Your Account</a></p>
              <p><a href="#">Become an Affiliate</a></p>
              <p><a href="#">Shipping Rates</a></p>
              <p><a href="#">Help</a></p>
            </div>

            {/* Contact Section with Icons */}
            <div className="colm4">
              <h4>Contact</h4>
              <p><FaMapMarkerAlt className="icon" /> New York, NY 10012, US</p>
              <p><FaEnvelope className="icon" /> info@gmail.com</p>
              <p><FaPhone className="icon" /> +91 234 567 88</p>
              <p><FaPhone className="icon" /> +91 234 567 89</p>
            </div>
          </div>
        </section>

        <hr />

        {/* Section 2: Copyright & Social Media */}
        <section className="sec2">
          <div className="cnt1">
            <div className="copy">
              © {new Date().getFullYear()} Copyright: <a href="https://Appscrip.com/">Appscrip.com</a>
            </div>

            {/* Social Media Icons */}
            <div className="cnt2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook className="social" /> Facebook
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter className="social" /> Twitter
              </a>

              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGoogle className="social" /> Google
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram className="social" /> Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
