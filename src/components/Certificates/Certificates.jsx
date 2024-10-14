import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './custom.css'; // assuming you have a custom CSS file for custom properties
import styles from "./Certificates.module.css";
import Pic1 from '../../../assets/certificates/GOOG(DA).jpg';
import Pic2 from '../../../assets/certificates/career_essentials.jpg';
import Pic3 from '../../../assets/certificates/AI_for_everyone.jpg';
import Pic4 from '../../../assets/certificates/ai-900.jpg';


const Certificates = () => {
  return (
    <section className={styles.container} id="certifications">
    <div className="container mt-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 "> 
          <h2 className={styles.title}><span style={{letterSpacing:"6px",fontSize:"35px",fontWeight:"700"}}>Certificates</span></h2>
        <div className={styles.content}>
          <div id="carouselExampleIndicators" className="carousel slide carousel-container bg-dark mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Pic2} className="d-block w-100" alt="Career Essentials" />
              </div>
              <div className="carousel-item">
                <img src={Pic1} className="d-block w-100" alt="Data Analytics" />
              </div>
              <div className="carousel-item">
                <img src={Pic4}  className="d-block h-300 w-100" alt="Microsoft AI-900" />
              </div>
              <div className="carousel-item">
                <img src={Pic3} className="d-block w-100" alt="AI for Everyone" />
              </div>

              {/* Add more carousel items here if needed */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Certificates;
