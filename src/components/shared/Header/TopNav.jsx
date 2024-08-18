import React from "react";
import { FaPhone } from "react-icons/fa";
import { PiEnvelopeSimple } from "react-icons/pi";
import { FaDownload } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="top_nav">
      <div className="main_container">
        <div className="left_info">
          <div className="item">
            <i>
              <FaPhone size={"15px"} />
              <span className="text">09630000000</span>
              <PiEnvelopeSimple size={"20px"} />
              <span className="text">support@yoursite.com</span>
            </i>
          </div>
        </div>

        <div className="Right_info">
          <i>
            <FaDownload />
            <span className="text">Download our app</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
