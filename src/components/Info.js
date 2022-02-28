import "./Style.css";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import avatar from "../avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Info() {
  return (
    <div className="DintonDigitalBusinessCard">
      <div className="Frame1">
        <div className="info-section">
          <img className="avatar" src={avatar} alt="avatar" />
          <div className="info-container">
            <div className="info_text">
              <p className="name">Dinton Harold Ainemukama</p>
              <p className="WebDeveloper">Web Developer</p>
              <p className="website">dev-dintonharold.pantheonsite.io</p>
            </div>
            <div className="buttons">
              <div className="Button">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <p className="EmailText">Email</p>
              </div>
              <div className="ButtonLinked">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <p className="LinkedInText">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
