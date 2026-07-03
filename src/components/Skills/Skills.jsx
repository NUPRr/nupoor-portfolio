import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      items: "HTML • CSS • JavaScript • React",
    },
    {
      title: "UI/UX Design",
      items: "Figma • Wireframing • Prototyping",
    },
    {
      title: "Video Editing",
      items: "Premiere Pro • After Effects • Motion Graphics",
    },
    {
      title: "Tools",
      items: "Git • GitHub • VS Code",
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-wrapper">
        {skills.map((skill, i) => (
          <motion.div
            className="skill-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.25, 1, 0.35, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <div className="skill-index">0{i + 1}</div>

            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </div>

            <div className="skill-line"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;