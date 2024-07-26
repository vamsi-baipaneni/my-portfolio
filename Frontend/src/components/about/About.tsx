import "./index.scss";
import React from "react";
import { getImageUrl } from "../../../utils";

const About = () => {
    return (
        <div className="about-container" id="about">
            <h1 className="about-title">ABOUT</h1>
            <section className="about-img-bullets">
                <img className="about-img" src={getImageUrl("about/aboutImage.jpg")} alt="about-image" />
                <ul className="about-bullets">
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-img" />
                        <span>
                            <h2>Frontend Developer</h2>
                            <p>I'm a frontend developer experienced in building responsive and optimized webpages</p>
                        </span>
                    </li>
                    <li>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server-img" />
                        <span>
                            <h2>Backend Developer</h2>
                            <p>I have experience in building fast and optimized REST based backend systems</p>
                        </span>
                    </li>
                    <li>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui-img" />
                        <span>
                            <h2>UI Developer</h2>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </span>
                    </li>
                </ul>
            </section>
        </div>

    );
};

export default About;
