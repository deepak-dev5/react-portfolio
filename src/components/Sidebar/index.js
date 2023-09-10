import "./index.scss";
import LogoS from "../../assets/images/logo.png";
import LogoSub from "../../assets/images/logo_name.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" style={{ borderRadius: "25px" }} />
          <img className="sub-logo" src={LogoSub} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/deepak-singh-983527141/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/deepak-dev5"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
