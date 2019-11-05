import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.menu = React.createRef();
        this.header = React.createRef();
        this.state = {
            isMenuOpen: false,
        }
    }

    toggleMenu = () => {
        if (this.menu.current.className.includes("hidden")) {
            this.menu.current.className = "navbar__menu--visible";
            this.header.current.className = "header__menu--on";
            this.setState({ isMenuOpen: true });
        } else {
            this.menu.current.className = "navbar__menu--hidden-after";
            this.header.current.className = "header";
            this.setState({ isMenuOpen: false });
        }
    }

    removeMenu = () => {
        this.menu.current.className = "navbar__menu--hidden-after";
        this.header.current.className = "header";
        this.setState({ isMenuOpen: false });
    }

    render() {
        let icon = this.state.isMenuOpen ? <FaTimes /> : <FaBars />;
        
        return(
            <section className="header" ref={this.header}>
                <nav className="navbar">
                    <div className="navbar__menu--icon" onClick={this.toggleMenu}>
                        {icon}
                    </div>
                    <div className="navbar__david-tenenbaum" onClick={this.removeMenu}>
                        <h1><NavLink to="/" >David Tenenbaum</NavLink></h1>
                    </div>
                    <div className="navbar__software-engineer" onClick={this.removeMenu}>
                        <h3><NavLink to="/">Software Engineer</NavLink></h3>
                    </div>
                    <div className="navbar__menu--desktop" ref={this.menu}>
                        <div className="navbar__menu--pages">
                            <NavLink to="/about" className="menu-about" onClick={this.toggleMenu}>About</NavLink>
                            <NavLink to="/portfolio" className="menu-portfolio" onClick={this.toggleMenu}>Portfolio</NavLink>
                            <NavLink to="./David-Tenenbaum-CV.pdf" target="_blank" className="menu-resume" onClick={this.toggleMenu}>Resume</NavLink>
                        </div>
                    </div>
                </nav>
                <div className="navbar__menu--hidden-before" ref={this.menu}>
                    <div className="navbar__menu--pages">
                        <NavLink to="/about" className="menu-about" onClick={this.toggleMenu}>About</NavLink>
                        <NavLink to="/portfolio" className="menu-portfolio" onClick={this.toggleMenu}>Portfolio</NavLink>
                        <NavLink to="./David-Tenenbaum-CV.pdf" target="_blank" className="menu-resume" onClick={this.toggleMenu}>Resume</NavLink>
                    </div>
                    <div className="navbar__menu--social-media">
                        <a href="https://www.linkedin.com/in/davidtenenbaum87/" className="linkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/davidtenenbaum87" className="github"><FaGithub /></a>
                        <a href="mailto:david.tenenbaum87@gmail.com?subject=Hello, David!" className="gmail"><FaGoogle /></a>          
                    </div>
                </div>
            </section>
        )
    };
};

export default Navbar;
