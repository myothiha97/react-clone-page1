import "./footer.styles.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">Let's have a chat</div>
      <div className="footer-boxes">
        <div className="box">
          <h2>Buid</h2>
          <p>Help you build something</p>
        </div>
        <div className="box">
          <h2>Buid</h2>
          <p>Help you build something</p>
        </div>
        <div className="box">
          <h2>Buid</h2>
          <p>Help you build something</p>
        </div>
        <div className="box">
          <h2>Buid</h2>
          <p>Help you build something</p>
        </div>
      </div>
      <div className="footer-lower">
        <div className="icons">
          <div className="icon">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="texts">
          <p>Copyright © Codigo - Mobile App Developer Singapore</p>
          <p>
            +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore
            573970
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
