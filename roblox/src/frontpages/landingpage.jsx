import React from 'react';
import './landingpage.css'; // Import the CSS file
import robloxPfp from '../assets/robloxpfp.jpg';
import robloxMap1 from '../assets/robloxmap/robloxeric1.jpg';
import robloxmap2 from '../assets/robloxmap/robloxeric2.jpg';
import robloxmap3 from '../assets/robloxmap/robloxeric3.jpg'
import robloxmap4 from '../assets/robloxmap3.jpg'
function Landingpage() {
  return (
    <section className="Landingpage">
      <div className="Hero-content">
        <img src={robloxPfp} alt="Roblox Logo" className="roblox-pic" />
        <h1>Kyle Lizardo</h1>
        <p className="hero-subtitle">Roblox Developer & IT Professional</p>
      </div>

      <div className="About-me">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am Kyle Lizardo, a passionate Roblox developer with 2 years of experience creating immersive gaming experiences.</p>
            <p>I recently graduated with a Bachelor of Science in Information Technology (BSIT), completing a 4-year course that equipped me with comprehensive technical knowledge.</p>
            <p>My goal is to combine my IT expertise with my passion for game development to create engaging and innovative Roblox experiences.</p>
          </div>
          <div className="about-image">
            <img src={robloxmap4} alt="My Roblox Creation" className="about-pic" />
          </div>
        </div>
      </div>

      <div className="Projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src={robloxMap1} alt="Project 1" className="project-pic" />
            <h3>Adventure World</h3>
            <p>An immersive open-world adventure game with custom mechanics.</p>
          </div>
          <div className="project-card">
            <img src={robloxmap2} alt="Project 2" className="project-pic" />
            <h3>Survival Island</h3>
            <p>A challenging survival game with unique resource management.</p>
          </div>
          <div className="project-card">
            <img src={robloxmap3} alt="Project 3" className="project-pic" />
            <h3>Racing Evolved</h3>
            <p>A high-speed racing game with customizable vehicles.</p>
          </div>
        </div>
      </div>

      <div className="Services">
        <h2>My Services</h2>
        <div className="services-container">
          <div className="service">
            <i className="service-icon">🎮</i>
            <h3>Game Development</h3>
            <p>Custom Roblox games designed from concept to completion.</p>
          </div>
          <div className="service">
            <i className="service-icon">🏗️</i>
            <h3>Level Design</h3>
            <p>Creative and engaging environments for your gaming experience.</p>
          </div>
          <div className="service">
            <i className="service-icon">💻</i>
            <h3>Scripting</h3>
            <p>Efficient and clean code to bring your game mechanics to life.</p>
          </div>
        </div>
      </div>

      <div className="Contact">
        <h2>Get In Touch</h2>
        <p>Interested in working together? Reach out to me!</p>
        <button className="contact-btn">Contact Me</button>
      </div>
    </section>
  );
}

export default Landingpage;