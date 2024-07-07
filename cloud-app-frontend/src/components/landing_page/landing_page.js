import React, { useState, useEffect } from "react";
import "./landing_page.css";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const words = ["Images.", "Videos.", "Documents.", "Audios."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div>
      <div className="center-cont">
        <div className="text-cont">
          <h1 className="main-head mb-5">Cloud Storage</h1>
          <div className="flex flex-row">
            <h3 className="sub-para2">
              Seamlessly upload & store{" "}
              <span id="words">{words[currentWordIndex]}</span>
            </h3>
          </div>

          <p className="sub-para1">
            Enjoy your cloud storage management effortlessly, powered by
            <i class="fab fa-aws ms-2 mt-2 aws-logo" ></i>
          </p>
          <Link to="/signup">
            <button className="btn btn-dark text-light mx-2 button-style my-1">
              Signup
            </button>
          </Link>

          <Link to="/login">
            <button className="btn btn-dark text-light mx-2 button-style my-1">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
