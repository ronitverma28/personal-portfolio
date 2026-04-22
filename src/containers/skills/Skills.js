import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <div className="skills-header-content">
            <h1 className="skills-header" style={{ color: theme.text }}>
              Skills &amp; Expertise
            </h1>
            <p
              className="subTitle skills-description"
              style={{ color: theme.secondaryText }}
            >
              Technologies and tools I use to build scalable backend systems
            </p>
          </div>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
