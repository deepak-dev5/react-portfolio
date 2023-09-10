import React, { useEffect } from "react";
import LogoTitle from "../../assets/images/logo-s1.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const nameArray = ["e", "e", "p", "a", "k"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / Cosmos Geek</h2>
          <Link to="/contact" className="contact-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
