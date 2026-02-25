import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jothi Lakshmanan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using Java Spring-boot, React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
 <div className={styles.socialLinks}>
        <a href="https://drive.google.com/file/d/1B3SVn7BGTmgBppwR-gZSjH7UBrJSJARn/view" target="_blank" className={styles.contactBtn}>
          Download CV
        </a>
        {/* <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" onClick={"https://www.linkedin.com/in/jothi-lakshmanan"}/>
                    <a href="https://www.linkedin.com/in/jothi-lakshmanan" target="_blank"  rel="noopener noreferrer">www.linkedin.com/in/jothi-lakshmanan</a>

                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                              <a href="https://github.com/Jothilax?tab=repositories" target="_blank"  rel="noopener noreferrer">https://github.com/Jothilax?tab=repositories</a>
 */}

        {/* LinkedIn */}
       
          <a
            href="https://www.linkedin.com/in/jothi-lakshmanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jothilax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub"
            />
          </a>

      {/* Mail */}  
       <a href="mailto:jothilakshmi2162000@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>

     </div>

      </div>
      <img
        src={getImageUrl("hero/hero3.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
