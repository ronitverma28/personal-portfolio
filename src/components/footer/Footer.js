import React from "react";

import "./Footer.css";

import { Fade } from "react-reveal";

import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <span className="copyright-symbol">&copy;</span> {currentYear}{" "}
          {greeting.title} • Designed & Developed with Passion
        </p>
      </Fade>
    </footer>
  );
}
