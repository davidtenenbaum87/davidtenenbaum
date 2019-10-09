import React from "react";


const About = props => {
  return (
    <div className="about">
      <div className="employment">
        <ul>
          <li>
            Software Engineer @{" "}
            <a href="https://integri-data.com/">IntegriDATA</a>
          </li>
          <li>Double-Bassist @ David Tenenbaum Music</li>
        </ul>
      </div>

      <div className="langs">
        Languages:
        <ul>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="frameworks">
        Frameworks & Libraries:
        <ul>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Next.js</li>
          <li>Bootstrap</li>
          <li>SASS/SCSS</li>
          <li>Rails</li>
        </ul>
      </div>

      <div className="education">
        Education:
        <ul>
          <li>
            <a href="https://www.juilliard.edu/">The Juilliard School</a> -
            Master of Music
          </li>
          <li>
            <a href="https://english.tau.ac.il/">Tel-Aviv University</a> -
            Bachelor of Music
          </li>
          <li>
            <a href="https://flatironschool.com/">Flatiron School</a> - Software
            Engineering Immersive
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
