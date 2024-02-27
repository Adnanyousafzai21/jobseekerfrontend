import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { context } from "../../contextapi/Context";

const Footer = () => {
  const { isAuthorized } = useContext(context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Adnan Rafiq.</div>
      <div>
        <Link to={"https://www.facebook.com/adanan.khan.545?mibextid=ZbWKwL"} target="_blank">
          <FaFacebookF />
        </Link>
     
        <Link to={"https://www.linkedin.com/in/adnan-rafiq-b18a61220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/adnanrafiq309?igsh=MXNkcGQzMzV2emdqeA=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;