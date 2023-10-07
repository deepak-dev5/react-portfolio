import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faGitSquare,
  faGithub,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faGear, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="cotainer about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              //strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            Highly skilled and accomplished senior software engineer with over
            4+ years of experience in the software industry that includes java
            developer, Enterprise Application Integration, requirement analysis,
            design, development, testing, version control, and maintenance of
            applications of travel and banking domain.
          </p>

          <h2>Why Choose Me </h2>
          <h3>Expertise:</h3>
          <p>
            I have hands-on experience with a variety of programming languages
            and frameworks, including but not limited to Java,JavaScript, React,
            Node.js, Python, Spring and more.
          </p>
          <h3>Problem Solver:</h3>
          <p>
            I enjoy tackling complex challenges and finding innovative
            solutions. My problem-solving skills have been honed through years
            of real-world development.
          </p>
          <h3>Collaborative:</h3>
          <p>
            I believe in open communication and teamwork. I'm not just a
            developer; I'm a partner who is dedicated to the success of your
            project.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#0a1bb4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#df2626" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLeaf} color="#3be906" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;
