import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      {/* Heading */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>ABOUT ME</h2>

        <p>
          I am a UI/UX Designer, Frontend Developer, and Video Editor with a
          passion for creating digital experiences that are both visually
          engaging and highly functional. I enjoy transforming ideas into
          intuitive interfaces, responsive websites, and compelling visual
          content that leave a lasting impression. My approach combines
          creativity with problem-solving, ensuring every project is
          user-focused, modern, and purposeful. Whether I’m designing in Figma,
          developing websites, or editing videos, I focus on clarity, detail,
          and impact.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="cards">

  {/* UI/UX */}
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
delay:.2
}}

    viewport={{ once: true }}

  >
    <span>01</span>
    <h3>UI/UX Design</h3>

    <ul>
      <li>User Research</li>
      <li>Wireframing</li>
      <li>Prototyping</li>
      <li>Design Systems</li>
      <li>Figma</li>
    </ul>

    <div className="arrow">↗</div>
  </motion.div>

  {/* Frontend */}
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay:.4 }}
    viewport={{ once: true }}
  >
    <span>02</span>
    <h3>Frontend Development</h3>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Responsive Design</li>
    </ul>

    <div className="arrow">↗</div>
  </motion.div>

  {/* Video */}
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay:.6}}
    viewport={{ once: true }}
  >
    <span>03</span>
    <h3>Video Editing</h3>

    <ul>
      <li>Premiere Pro</li>
      <li>After Effects</li>
      <li>Motion Graphics</li>
      <li>Reels</li>
      <li>Brand Videos</li>
    </ul>

    <div className="arrow">↗</div>
  </motion.div>

</div>

      {/* Tools */}
      <motion.div
        className="tools"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h4>TOOLS I WORK WITH</h4>

        <div className="tools-list">
          <span>Figma</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Photoshop</span>
          <span>Illustrator</span>
          <span>Premiere Pro</span>
          <span>After Effects</span>
          <span>VS Code</span>
        </div>
      </motion.div>

    </section>
  );
}
<motion.section

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.9
}}

></motion.section>

export default About;