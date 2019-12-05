import React from "react";

const About = props => {
  return (
    <section className="about">
      <div className="about__experience">
        <h4 className="header-about u-margin-bottom-extra-small">
          Experience
        </h4>
        <ul>
          <li className="u-text-bold"><i className="fas fa-laptop-code"></i>Software Engineer @ &nbsp;
            <a href="https://integri-data.com/" className="btn">IntegriDATA</a>
          </li>
          <li className="u-text-italic">January 2019 - Present</li>
          <li className="u-text-bold"><i className="fas fa-music"></i>Bassist @ David Tenenbaum Music</li>
          <li className="u-text-italic">2013 - Present</li>
        </ul>
      </div>

      <div className="about__skills">
        <h4 className="header-about u-margin-bottom-extra-small">
          Skills
        </h4>
        <div className="about__skills--list">
          <ul>
            <li><i className="devicon-javascript-plain"></i>JavaScript (ES6)</li>
            <li><i className="devicon-ruby-plain"></i>Ruby</li>
            <li><i className="devicon-rails-plain"></i>Ruby-on-Rails</li>
            <li><i className="devicon-csharp-plain"></i>C#</li>
            <li><i className="devicon-dot-net-plain"></i>.NET Framework</li>
            <li><i className="devicon-html5-plain"></i>HTML5</li>
            <li><i className="devicon-css3-plain"></i>CSS3</li>
            <li><i className="devicon-sass-original"></i>SASS/SCSS</li>
            <li><i className="devicon-react-original"></i>React / Redux</li>
            <li><i className="devicon-postgresql-plain"></i>SQL / PostgreSQL</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="about__education">
        <h4 className="header-about u-margin-bottom-extra-small">
          Education
        </h4>
        <div className="about__education--school">
          <li className="u-text-bold">
          <i className="fas fa-graduation-cap"></i>The Juilliard School / NYC
          </li>
          <li className="u-text-italic">
            Master of Music
          </li>
        </div>
        <div className="about__education--school">
          <li className="u-text-bold">
          <i className="fas fa-graduation-cap"></i>Tel-Aviv University / TLV, Israel
          </li>
          <li className="u-text-italic">
            Bachelor of Music
          </li>
        </div>
        <div className="about__education--school">
          <li className="u-text-bold">
          <i className="fas fa-graduation-cap"></i>Flatiron School / NYC
          </li>
          <li className="u-text-italic">
            Software Engineering Immersive
          </li>
        </div>
      </div>
      {/* <div className="about__location">
        <i className="fas fa-map-marker-alt"></i>New York City
      </div> */}
    </section>
  );
};

export default About;
