import "./index.scss";
import React from "react";
import { skills } from "./skills";
import { experiences } from "./experience";

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <h1 className="exp-title">EXPERIENCE</h1>
      <div className="exp-content">
        <div className="exp-skills">
          {skills.map((skill, index) => (
            <div className="exp-skill" key={index}>
              <div className="exp-skillimg-container">
                <img src={skill.path} alt="skill-image" />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="exp-exps">
          {experiences.map((experience, index) => (
            <div className="exp-exp" key={index}>
              <img
                className="exp-exp-img"
                src={experience.image}
                alt="exp-history-image"
              />
              <div className="exp-exp-content">
                <h2 className="exp-exp-title">{experience.title}</h2>
                <span className="exp-exp-period">{experience.period}</span>
                <ul className="exp-exp-pointers">
                  {experience.pointers.map((point, pointindex) => (
                    <li className="exp-exp-points" key={index + pointindex}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
