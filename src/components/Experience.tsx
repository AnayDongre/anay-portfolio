import { ExperienceInterface } from "../types";
export interface ExperiencePropInterface {
  experiences: ExperienceInterface[];
}

function Experience(props: ExperiencePropInterface) {
  const { experiences } = { ...props };
  return (
    <>
      {experiences.map((experience) => (
        <div className="experience" key={experience.id}>
          <div className="experience-timeline">{experience.timeline}</div>
          <div className="experience-content">
            <div className="experience-heading">
              <div className="position">{experience.role}|</div>
              <div className="title">{experience.company}</div>
            </div>
            <div className="experience-description">
              {experience.description}
            </div>
            <div className="skill-container">
              {experience.skills.map((skill) => (
                <span className="skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
