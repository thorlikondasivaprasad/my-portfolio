import React from 'react'
import {getImageUrl} from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
    <h2 className={styles.title}><span style={{letterSpacing:"6px"}}>ABOUT ME</span></h2><br/>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="About Image" 
            className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="About cursor" />
                    <div className={styles.aboutItemText}>
                        <h1>Aspiring Software Developer.</h1><br />
                        <p>
                            - Interested in Machine Learning and Problem Solving.<br/>
                            - Being a Frontend Developer,I can build the Responsive websites using HTML, CSS, Bootstrap, JS, React JS,<br/>
                            - I've good practice on Analyzing the data using Python, SQL.<br/>
                            - Good Knowledge on Backend Development using Django framework.
                            - Data Visualization using Matplotlib,Power BI.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
export default About;
