import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nsiddharth2809@gmail.com">nsiddharth2809@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/siddharth-nadimetla-6a1487264/">linkedin.com/in/siddharth-nadimetla-6a1487264</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/siddharth-nadimetla">github.com/siddharth-nadimetla</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/instagramIcon.png")} alt="Instagram icon" />
          <a href="https://www.instagram.com/apieceofsidd/">@apieceofsidd</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/xIcon.png")} alt="Instagram icon" />
          <a href="https://twitter.com/Moirihen">@Moirihen</a>
        </li>
      </ul>
    </footer>
  );
};