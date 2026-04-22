import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SkillCategoryCard from "./SkillCategoryCard";

export default function SkillSection(props) {
  const theme = props.theme;

  const sectionStyles = {
    "--skills-card-bg": theme.highlight,
    "--skills-card-border": theme.headerColor,
    "--skills-shadow-color": theme.imageHighlight,
    "--skills-text-color": theme.text,
    "--skills-secondary-color": theme.secondaryText,
    "--skills-icon-bg": theme.body,
  };

  return (
    <div className="skills-layout" style={sectionStyles}>
      <Fade bottom duration={1200} distance="12px">
        <div className="skills-cards-grid">
          {skills.data.map((skill) => (
            <SkillCategoryCard key={skill.title} skill={skill} theme={theme} />
          ))}
        </div>
      </Fade>
    </div>
  );
}
