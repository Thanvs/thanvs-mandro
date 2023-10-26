import React, { useEffect, useState } from "react";
//this is the skills card component for representing your skills.
const SkillsLists = () => {
  //data of your skills
  const [skills, setSkills] = useState([
    { title: "HTML / CSS", percent: "80%", animationDone: false },
    { title: "Figma", percent: "90%", animationDone: false },
    { title: "Java", percent: "60%", animationDone: false },
    { title: "Photography", percent: "75%", animationDone: false },
    { title: "Branding", percent: "85%", animationDone: false },
  ]);

  useEffect(() => {
    const handleSkillFill = () => {
      const skillFillElements = document.querySelectorAll(".progress-bar");

      skillFillElements.forEach((skillFill, index) => {
        const topOfObject = skillFill.offsetTop;
        const bottomOfWindow = window.scrollY + window.innerHeight - 70;

        if (bottomOfWindow > topOfObject) {
          setSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            updatedSkills[index].animationDone = true;
            return updatedSkills;
          });
        }
      });
    };

    window.addEventListener("scroll", handleSkillFill);
    handleSkillFill();

    return () => {
      window.removeEventListener("scroll", handleSkillFill);
    };
  }, []);

  return (
    <div className="skills-lists">
      {skills.map((data, i) => (
        <div className="skill" key={i}>
          <div className="skill-label">
            {data.title}
            <span className="skill-percent">{data.percent}</span>
          </div>
          <div className="progress">
            <div
              className={`skill-fill progress-bar ${
                data.animationDone ? "animation-done" : ""
              }`}
              style={{ width: data.animationDone ? data.percent : 0 }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsLists;
