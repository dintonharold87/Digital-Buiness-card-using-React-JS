import "./Style.css";
import avatar from "../avatar.png";

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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
