import "./Contact.css";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

import contactImg from "../../assets/images/contact.jpg";

function Contact() {
  return (
    <section className="contact">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Let’s Connect & Collaborate
      </motion.h2>

      <p className="contact-sub">
        Open for internships, freelance projects & creative collaborations.
      </p>

      <div className="contact-wrapper">

        {/* LEFT IMAGE */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={contactImg}
            alt="contact"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* RIGHT INFO */}
        <div className="contact-info">

          {[
            {
              icon: <FaPhone />,
              text: "+91 8767689516",
            },
            {
              icon: <FaEnvelope />,
              text: "nupr.ce@gmail.com",
            },
            {
              icon: <FaGithub />,
              text: "github.com/NUPRr",
              link: "https://github.com/NUPRr",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link || "#"}
              target="_blank"
              className="contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.text}</span>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Contact;