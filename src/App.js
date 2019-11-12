import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './main.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: [
                {
                    title: "Boggle",
                    vimeoURL: "https://player.vimeo.com/video/288186446",
                    description: "Word game played using a grid of lettered dice, in which players attempt to find words in sequences of adjacent letters",
                    githubLinks: {
                        "Front-End": "https://github.com/davidtenenbaum87/boggle-frontend",
                        "Back-End": "https://github.com/davidtenenbaum87/boggle-backend"
                    },
                    technologies: "JavaScript (ES6) ~ CSS"
                },
                {
                    title: "Trello",
                    vimeoURL: "https://player.vimeo.com/video/288975230",
                    description: "Inspired by Trello.com, this is a fun, flexible and friendly way to organize plans, projects and more",
                    githubLinks: {
                        "Github": "https://github.com/davidtenenbaum87/Trello-Ruby-on-Rails"
                    },
                    technologies: "Ruby-on-Rails"
                },
                {
                    title: "MusicStation",
                    vimeoURL: "https://player.vimeo.com/video/288988954",
                    description: "Browser-based music library enabling a better music learning experience for musicians. Upload music sheet to your library, automatically search and stream performances from YouTube, and access built-in metronome and tuner for practicing",
                    githubLinks: {
                        "Front-End": "https://github.com/davidtenenbaum87/Music-Station-FrontEnd",
                        "Back-End": "https://github.com/davidtenenbaum87/Music-Station-BackEnd"
                    },
                    technologies: "React ~ Redux ~ Rails API ~ CSS"
                }
            ]
        }
    }

    render() {
        return(
            <div className="app">
                <Header />
                <Fragment>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/about" render={() => <About />} />
                    <Route exact path="/portfolio" render={() => <Portfolio portfolioItems={this.state.portfolioItems} />} />
                </Fragment>
                <Footer />
            </div>
        )
    }
}

export default App;