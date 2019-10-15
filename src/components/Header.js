import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.menu = React.createRef();
        this.state = {
            isMenuOpen: false,
        }
    }

    toggleMenu = () => {
        if (this.menu.current.className.includes("hidden")) {
            this.menu.current.className = "menu-visible";
            this.setState({ isMenuOpen: true })
        } else {
            this.menu.current.className = "menu-hidden";
            this.setState({ isMenuOpen: false })
        }
    }

    render() {
        let icon = this.state.isMenuOpen ? <FaTimes /> : <FaBars />;
        
        return(
            <Fragment>
                <div className="navbar">
                    <div className="navbar-menu-icon" onClick={this.toggleMenu}>
                        {icon}
                    </div>
                    <div className="navbar-name">
                        <h1><NavLink to="/" className="navbar-link-home" >David Tenenbaum</NavLink></h1>
                    </div>
                </div>
                <div className="hidden" ref={this.menu} >
                    <div className="menu-visible-pages">
                        <NavLink to="/about" className="menu-about" onClick={this.toggleMenu}>About</NavLink>
                        <NavLink to="/portfolio" className="menu-portfolio" onClick={this.toggleMenu}>Portfolio</NavLink>
                        <NavLink to="./David-Tenenbaum-CV.pdf" target="_blank" className="menu-resume" onClick={this.toggleMenu}>Resume</NavLink>
                    </div>
                    <div className="menu-visible-social-media">
                        <a href="https://www.linkedin.com/in/davidtenenbaum87/" className="linkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/davidtenenbaum87" className="github"><FaGithub /></a>
                        <a href="mailto:david.tenenbaum87@gmail.com?subject=Hello, David!" className="gmail"><FaGoogle /></a>          
                    </div>
                </div> 
            </Fragment>
        )
    };
};

export default Navbar;
