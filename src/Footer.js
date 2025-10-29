import React from "react";


function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h5 className="footer-title">TuneGuru</h5>
          <p className="footer-desc">Your gateway to sound discovery 🎶</p>
        </div>

        <div className="footer-col">
          <h5 className="footer-title">Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/form">Add Record</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5 className="footer-title">About</h5>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5 className="footer-title">Connect</h5>
          <ul>
            <li><a href="mailto:info@tuneguru.com">info@tuneguru.com</a></li>
            <li>
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TuneGuru. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;