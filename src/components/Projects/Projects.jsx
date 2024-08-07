import React from 'react';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}><span style={{letterSpacing:"6px"}}>Projects</span></h2>
        <div className={styles.projects}>
            {
            projects.map((project,id)=>{
                return <ProjectCard key={id} project={project}/>  
                    // using Props in React
                })}
        </div>
    </section>
  )
}
export default Projects;
