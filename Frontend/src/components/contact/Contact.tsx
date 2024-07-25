import "./index.scss";
import { getImageUrl } from "../../../utils";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-heading">
          <h1>Contact</h1>
          <span>Feel free to reach out!</span>
        </div>
        <div className="contact-info">
          <div>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
            <a href="mailto:sribaipaneni@gmail.com" target="blank">
              sribaipaneni@gmail.com
            </a>
          </div>
          <div>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="email" />
            <a
              href="https://www.linkedin.com/in/srivamsibaipaneni"
              target="blank"
            >
              linkedin.com/srivamsibaipaneni
            </a>
          </div>
          <div>
            <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
            <a href="https://www.github.com/vamsi-baipaneni" target="blank">
              github.com/vamsi-baipaneni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
