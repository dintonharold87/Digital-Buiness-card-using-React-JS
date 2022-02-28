import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return (
      <div className="social-icons">
        <FontAwesomeIcon icon={faTwitter} className="highlight" size="2x" />
        <FontAwesomeIcon icon={faFacebook} className="highlight" size="2x" />
        <FontAwesomeIcon icon={faInstagram} className="highlight" size="2x" />
        <FontAwesomeIcon icon={faLinkedin} className="highlight" size="2x" />
        <FontAwesomeIcon icon={faGithub} className="highlight" size="2x" />
      </div>
    );
}