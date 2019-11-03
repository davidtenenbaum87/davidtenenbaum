import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle} from 'react-icons/fa';

const year = new Date();

const Footer = (props) => {
    return(
        <section className="footer">
            <div className="footer__links">
                <a className="linkedIn" href="https://www.linkedin.com/in/davidtenenbaum87/"><FaLinkedin /></a>
                <a className="linkedIn" href="https://github.com/davidtenenbaum87" ><FaGithub /></a>
                <a className="linkedIn" href="mailto:david.tenenbaum87@gmail.com?subject=Hello, David!" ><FaGoogle /></a>           
            </div>
            <div className="footer__copyright">
                David Tenenbaum © {year.getFullYear()} 
            </div>
        </section>
    )
};

export default Footer;
