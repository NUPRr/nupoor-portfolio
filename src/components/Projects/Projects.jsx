import "./Projects.css";
import { useState } from "react";
import { motion } from "framer-motion";

import bloomcafe1 from "../../assets/images/bloomcafe1.jpg";
import bloomcafe2 from "../../assets/images/bloomcafe2.jpg";
import bloomcafe3 from "../../assets/images/bloomcafe3.jpg";
import bloomcafe4 from "../../assets/images/bloomcafe4.jpg";
import bloomcafe5 from "../../assets/images/bloomcafe5.jpg";

import bloominteriors1 from "../../assets/images/bloominteriors1.jpg";
import bloominteriors2 from "../../assets/images/bloominteriors2.jpg";
import bloominteriors3 from "../../assets/images/bloominteriors3.jpg";
import bloominteriors4 from "../../assets/images/bloominteriors4.jpg";
import bloominteriors5 from "../../assets/images/bloominteriors5.jpg";
import bloominteriors6 from "../../assets/images/bloominteriors6.jpg";

import aura1 from "../../assets/images/aura1.jpg";
import aura2 from "../../assets/images/aura2.jpg";
import aura3 from "../../assets/images/aura3.jpg";
import aura4 from "../../assets/images/aura4.jpg";



function Projects() {

const cafeImages=[
bloomcafe1,
bloomcafe2,
bloomcafe3,
bloomcafe4,
bloomcafe5
];

const [activeCafe,setActiveCafe]=useState(cafeImages[0]);

const interiorImages = [
  bloominteriors1,
  bloominteriors2,
  bloominteriors3,
  bloominteriors4,
  bloominteriors5,
  bloominteriors6,
];

const [activeInterior, setActiveInterior] = useState(interiorImages[0]);

const auraImages = [
  aura1,
  aura2,
  aura3,
  aura4,
];

const [activeAura, setActiveAura] = useState(auraImages[0]);

return(

<section className="projects" id="projects">

<motion.div
className="project-heading"
initial={{
opacity:0,
scale:.92,
y:80
}}

whileInView={{
opacity:1,
scale:1,
y:0
}}

transition={{
duration:.9,
ease:[0.22,1,0.36,1]
}}
>

<p>SELECTED WORK</p>

<h2>Featured Projects</h2>

<span>
A collection of carefully crafted digital experiences,
blending aesthetics with functionality.
</span>

</motion.div>

{/* Bloom Cafe */}

<motion.div
className="project-block"
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
>

<div className="project-left">

<motion.img
  src={activeCafe}
  alt="Bloom Café Preview"
  className="main-image"
  initial={{
    opacity: 0,
    scale: 1.08
  }}
  whileInView={{
    opacity: 1,
    scale: 1
  }}
  transition={{
    duration: 1
  }}
  viewport={{ once: true }}
/>

<div className="thumbnail-row">

{cafeImages.map((img,index)=>(

<img
key={index}
src={img}
alt=""
className={`thumb ${activeCafe===img?"active":""}`}
onClick={()=>setActiveCafe(img)}
/>


))}

</div>

</div>

<div className="project-right">

<h3>Bloom Café</h3>

<h5>Frontend Website</h5>

<p>

Bloom Café is a responsive café website inspired by
warm pastel aesthetics and cozy winter vibes.
Designed with a strong focus on UI/UX,
it delivers a smooth browsing experience through
interactive cart functionality, responsive layouts,
and elegant visual storytelling.

</p>

<div className="tech">

<span>HTML5</span>

<span>CSS3</span>

<span>JavaScript</span>

<span>Responsive Design</span>

<span>Local Storage</span>

</div>

<a
href="https://nuprr.github.io/Bloom-cafe/"
target="_blank"
rel="noreferrer"
className="live-btn"
>

View Live ↗

</a>

</div>

</motion.div>

<motion.div
  className="project-block reverse"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  <div className="project-right">

    <h3>Bloom Interiors</h3>

    <h5>Luxury Interior Design Website</h5>

    <p>
      Bloom Interiors is an immersive digital experience that helps users
      discover their personal interior style through elegant design,
      interactive exploration, curated mood boards, and a refined luxury
      interface inspired by modern editorial aesthetics.
    </p>

    <div className="tech">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>JavaScript</span>
      <span>Responsive UI</span>
      <span>Interactive Quiz</span>
    </div>

    <a
      href="https://nuprr.github.io/bloom-interiors/"
      target="_blank"
      rel="noreferrer"
      className="live-btn"
    >
      View Live ↗
    </a>

  </div>

  <div className="project-left">

    <img
src={activeInterior}
alt=""
className="interior-image"
/>

    <div className="thumbnail-row">

      {interiorImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`thumb ${activeInterior === img ? "active" : ""}`}
          onClick={() => setActiveInterior(img)}
        />
      ))}

    </div>

  </div>

</motion.div>

{/* Aura Studio */}

<motion.div
className="project-block"
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
>

<div className="project-left">

<img
  src={activeAura}
  alt="Aura Studio"
  className="aura-image"
/>

<div className="thumbnail-row">

{auraImages.map((img,index)=>(

<img
key={index}
src={img}
alt=""
className={`thumb ${activeAura===img?"active":""}`}
onClick={()=>setActiveAura(img)}
/>

))}

</div>

</div>

<div className="project-right">

<h3>Aura Studio</h3>

<h5>Premium Workspace</h5>

<p>

Aura Studio is a premium web application designed for
creators, designers, and professionals to build elegant,
print-ready layouts through a clean visual workspace.
It combines dynamic customization, responsive design,
and modern interface principles into a seamless creative experience.

</p>

<div className="tech">

<span>HTML5</span>

<span>CSS3</span>

<span>JavaScript</span>

<span>CSS Grid</span>

<span>Responsive Design</span>

</div>

<a
href="https://nuprr.github.io/portfolio-studio/"
target="_blank"
rel="noreferrer"
className="live-btn"
>

View Live ↗

</a>

</div>

</motion.div>

</section>

)

}

export default Projects;