import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Built with passion & code</h2>
        <p>© {new Date().getFullYear()} Nupoor. All rights reserved.</p>
      </motion.div>

      <div className="footer-links">

        <motion.a
          href="mailto:nupr.ce@gmail.com"
          whileHover={{ y: -4 }}
        >
          <FaEnvelope /> Email
        </motion.a>

        <motion.a
          href="tel:+918767689516"
          whileHover={{ y: -4 }}
        >
          <FaPhone /> Call
        </motion.a>

        <motion.a
          href="https://github.com/NUPRr"
          target="_blank"
          whileHover={{ y: -4 }}
        >
          <FaGithub /> GitHub
        </motion.a>

      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>Designed & Developed with attention to detail ✦</p>
      </motion.div>

    </footer>
  );
}

export default Footer;