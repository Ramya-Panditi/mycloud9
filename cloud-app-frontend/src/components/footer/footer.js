import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-style d-flex flex-column justify-content-start text-center text-white bg-dark p-5 m-0">
        <h3>Cloud Storage Management</h3>

        <div className="footer-styling mt-2">
          <p className="m-0 para-style">Designed & Developed by</p>
          <p className="m-0 mt-1 para-style">
            <a
              className="anchor-style"
              href="https://www.linkedin.com/in/ramya-panditi/"
              target="_blank"
            >
              Ramya
            </a>{" "}
            &{" "}
            <a
              className="anchor-style"
              href="https://www.linkedin.com/in/saiteja-adapa/"
              target="_blank"
            >
              Saiteja
            </a>
          </p>
          <p className="para-style mt-5 mb-0 pb-0">
            Copyright &copy; Cloud Storage |{" "} Powered by
            <i class="fab fa-aws ms-2 mt-2 aws-logo"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
