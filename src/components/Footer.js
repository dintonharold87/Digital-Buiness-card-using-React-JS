import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer(){
    return (
      <div className="social-icons">
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </div>
    );
}