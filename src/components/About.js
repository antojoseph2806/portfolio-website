import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          
          <p>Hi, I'm Anto Joseph, a passionate and aspiring Full Stack Developer currently pursuing my Master of Computer Applications (MCA) at Amal Jyothi College of Engineering, Koovappally PO, Kanjirappally, Kerala 686518.<br></br> 
             I completed my Bachelor of Computer Applications (BCA) from MES College, Nedumkandam, Chembalam P.O , Udumbanchola, Kerala 685553.
            </p>
            <p>What I Bring😊<br></br>
            ○ Frontend Development: Expertise in React.js for building interactive and dynamic UIs.<br></br>

            ○ Backend Development: Skilled in Node.js for building scalable, server-side applications.<br></br>

            ○ Proficient in HTML and CSS for crafting clean and responsive designs.<br></br>

            ○ Experience with MongoDB for building and managing databases.<br></br>

            ○ A mindset rooted in continuous learning and adapting to new challenges.<br></br>

</p>
        </div>
        <div className="about-image">
          <img src="/anto.webp" alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default About;
