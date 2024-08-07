import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}><br />
        <h1 className={styles.title}><span>S</span>iva <span>P</span>rasad <span>T</span>horlikonda..</h1><br/>
        <p className={styles.description}>Hi👋, Welcome 🚀 to My Responsive Portfolio Website,
          I'm a passionate Problem-Solving Enthusiast and an Aspiring Software Developer.
           My skills span both frontend and backend development, allowing me to 
           build responsive and robust applications.
        </p>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.contactBtn}>CONTACT ME</a>
          <a href="/resume.pdf" className={styles.contactBtn}>R E S U M E</a>
        </div>
      </div>
      <img src={getImageUrl("hero/profile_pic2.png")} alt="Hero" className={styles.heroImg}/>
      
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
export default Hero;
