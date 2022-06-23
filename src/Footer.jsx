import { Copyright } from "@mui/icons-material";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__left">
        <div className="footer__leftOption">
          <a href="https://github.com/SudharsanSandyy007">GitHub</a>
        </div>
        <div className="footer__leftOption">
          <a href="https://www.linkedin.com/in/sudharsan-d-891242196/">
            LinkedIn
          </a>
        </div>
        <div className="footer__leftOption">
          <a href="https://sqwebz.tech/">SqWebz</a>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__option">
          <Copyright /> SudharsanDevkumar :)
        </div>
      </div>
    </div>
  );
}

export default Footer;
