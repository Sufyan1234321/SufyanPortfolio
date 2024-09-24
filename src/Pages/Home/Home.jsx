import React, { useState, useEffect } from 'react';
import screenshot from '../../assets/ss.png';
import "./home.css";

function Home() {
  const text = "Hi! I'm Abu Sufyan"; // The text you want to display
  const [displayedText, setDisplayedText] = useState(''); // State to store displayed text
  const [index, setIndex] = useState(0); // Index to track the current character

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index)); // Add the next character
        setIndex(index + 1); // Move to the next character
      }, 150); // Adjust the speed (in milliseconds) of the typing effect

      return () => clearTimeout(timer); // Clear timeout on cleanup
    }
  }, [index, text]);

  return (
    <>
      <section className="introduction">
    <div className='intro'>
        <h1>
            {displayedText.split('').map((char, idx) => (
                <span key={idx} className="bounce">
                    {char}
                </span>
            ))}
        </h1><br />
        <p>
            <strong>Aspiring Full-Stack Developer</strong>
        </p>
        <p className='paragraph'>I recently graduated with a degree in Computer Engineering.</p>
        <span>
            <button type='button' className='btn'>Contact Me</button>
            <button type='button' className='btn'>Hire Me On Fiverr</button>
        </span>
    </div>
    <div className='image'>
        <img src={screenshot} alt="image" />
    </div>
</section>


      <section className="about-me">
        <h1 className='about-me-heading'>About Me</h1>
        <h2>Hi! I'm Abu Sufyan</h2>
        <p className='about-me-para'>
          I have completed graduation in Computer Engineering with a
          strong passion for Full-Stack development. I have a solid foundation in
          front-end and back-end technologies and am eager to apply my skills in
          real-world projects. Through my academic journey and hands-on
          experience, I've developed a keen interest in creating responsive and
          user-friendly web apps/website.
        </p>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2 className='education-heading'>Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Engineering in Computer Engineering</strong> -
            Amravati University, Manav School of Engineering and Technology
            (Completed in June 2024)
          </li>
          <li>
            <strong>Diploma in Computer Engineering (Polytechnic)</strong> - 
            MSBTE (Completed in 2019)
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className='skills-heading'>Skills</h2>
        <div className="skill-bar">
          <div className="skill">
            <p>CSS</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
          <div className="skill">
            <p>Bootstrap</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}>75%</div>
            </div>
          </div>
          <div className="skill">
            <p>HTML</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "95%" }}>95%</div>
            </div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
          <div className="skill">
            <p>Node.js</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}>75%</div>
            </div>
          </div>
          <div className="skill">
            <p>WordPress</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="skill">
            <p>PHP</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
          <div className="skill">
            <p>MongoDB</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }}>60%</div>
            </div>
          </div>
          <div className="skill">
            <p>MySQL</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>70%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiverr Experience Section */}
      <section className="fiverr-experience">
        <h2 className='fiverr-experience-heading'>Fiverr Experience</h2>
        <p>
          During my college years, I worked as a freelancer on Fiverr, where I
          successfully completed a variety of projects related to web
          development. This experience allowed me to enhance my skills in
          building responsive websites and providing quality services to clients
          worldwide. I gained practical experience in web technologies, which
          greatly contributed to my professional growth and prepared me for
          real-world challenges.
        </p>
      </section>

      {/* footer */}
      <footer className="footer">
            <div className="footer-content">
                <h3>Contact Me</h3>
                <p>Email: youremail@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <div className="social-media">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#services">services</a>
                
            </div>
            <div className="footer-bottom">
                <p>© 2024 Abu Sufyan. All rights reserved.</p>
                <p>Looking for collaboration? Let's talk!</p>
            </div>
        </footer>
    </>
  );
}

export default Home;
