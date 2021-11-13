import React from "react";

import classes from "../style/Footer.module.css";

const Footer = () => {
  
  return (
    <footer className={classes.footer}>
      <div className={classes.footerHeader}>
        <div>
          <h2>Incense8</h2>
          <ul>
            <li>
              <a href="/">Esablised</a>
            </li>

            <li>
              <a href="/">Esablised</a>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <h2>Services</h2>
          <ul>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>

            <li>
              <a href="/">Esablised</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Resoures</h2>
          <ul>
            <li>
              <a href="/">Esablised</a>
            </li>

            <li>
              <a href="/">Esablised</a>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <h2>Address</h2>
          <ul>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
            <li>
              <a href="/">Esablised</a>
            </li>
          </ul>
          <div className={classes.SocialMedia}>
            <div>
              <img src="linkedin.png" alt="" />
            </div>
            <div>
              <img src="instagram.png" alt="" />
            </div>
            <div>
              <img
                className={classes.Facebook_color}
                src="/facebook.png"
                alt=""
              />
            </div>
            <div>
              <img src="/twitter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
