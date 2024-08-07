import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out.!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                <a href="mailto:thorlikondasivaprasad@gmail.com">thorlikondasivaprasad@gmail.com</a>
            </li> 
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/tsivaprasad">linkedin.com/thorlikondasivaprasad</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                <a href="https://github.com/thorlikondasivaprasad">github.com/thorlikondasivaprasad</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact;
