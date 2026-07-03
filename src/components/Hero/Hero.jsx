import "./Hero.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function Hero() {
  const [position,setPosition]=useState({x:0,y:0});

useEffect(()=>{

const move=(e)=>{

setPosition({
x:e.clientX,
y:e.clientY
})

}

window.addEventListener("mousemove",move);

return ()=>window.removeEventListener("mousemove",move);

},[]);
  return (
    <section className="hero">
      <div
className="cursor-light"
style={{
left:position.x,
top:position.y
}}
></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="portfolio-tag">PORTFOLIO</p>

        <h1 className="hero-name">
          Nupoor
          Naik
        </h1>

        <h2 className="hero-heading">
          Design. Develop. Deliver.
        </h2>

        <div className="hero-role">
          <span>UI/UX Designer</span>
          <span>•</span>
          <span>Frontend Developer</span>
          <span>•</span>
          <span>Video Editor</span>
        </div>

        <p className="hero-desc">
          I create meaningful digital experiences through interface design,
          responsive development and visual storytelling.
        </p>

        <div className="hero-buttons">
          <button
    className="primary-btn"
    onClick={() =>
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    Explore
  </button>
          <a
  href="/Cv/nupoorcvfinal.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  CV
</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
