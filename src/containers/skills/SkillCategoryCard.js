import React from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

const categoryIcons = {
  Languages: "mdi:language-java",
  Backend: "mdi:server-security",
  Database: "mdi:database",
  Tools: "mdi:toolbox-outline",
  "Core Concepts": "mdi:source-branch",
};

export default function SkillCategoryCard(props) {
  const { skill, theme } = props;
  const proficiency = skill.proficiency || "Intermediate";
  const categoryIcon =
    skill.categoryIcon || categoryIcons[skill.title] || "mdi:code-braces";

  return (
    <article className="skill-category-card">
      <header className="skill-card-header">
        <span
          className="skill-card-icon"
          style={{ color: theme.imageHighlight }}
          aria-hidden="true"
        >
          <span className="iconify" data-icon={categoryIcon} data-inline="false" />
        </span>
        <div className="skill-card-title-block">
          <h2 className="skill-card-title" style={{ color: theme.text }}>
            {skill.title}
          </h2>
          <span className="skill-level-tag" style={{ color: theme.text }}>
            {proficiency}
          </span>
        </div>
      </header>

      <SoftwareSkill logos={skill.softwareSkills} />

    </article>
  );
}
