(window["webpackJsonpdavid-tenenbaum-website"] = window["webpackJsonpdavid-tenenbaum-website"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@keyframes displayMenu {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n    height: 0vh; }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n    height: 100vh; } }\n\n@keyframes removeMenu {\n  0% {\n    opacity: 1;\n    height: 100vh;\n    visibility: visible; }\n  100% {\n    opacity: 0;\n    height: 0vh;\n    visibility: hidden; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  font-size: 62.5%;\n  background-color: white;\n  box-sizing: border-box; }\n\nbody {\n  z-index: 0; }\n\n.header-about {\n  font-size: 2.5rem;\n  display: inline-block; }\n\n.u-center-text {\n  text-align: center; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem; }\n\n.u-margin-bottom-extra-small {\n  margin-bottom: .8rem; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 4rem; }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem; }\n\n.u-margin-top-big {\n  margin-top: 8rem; }\n\n.u-margin-top-huge {\n  margin-top: 10rem; }\n\n.u-margin-left-small {\n  margin-left: 1rem; }\n\n.u-text-bold {\n  font-weight: bold; }\n\n.u-text-italic {\n  font-style: italic; }\n\n.u-border-bottom {\n  border-bottom: .5px solid black; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .navbar {\n    display: grid;\n    grid-template-areas: \"menu name\";\n    align-items: center;\n    background-color: #5c94bd;\n    border-bottom: 0.2rem solid #FFF;\n    position: relative;\n    padding: 1rem 0; }\n    .navbar__name {\n      grid-area: \"name\";\n      justify-self: right;\n      font-size: 1.5rem;\n      font-family: 'Lobster', cursive;\n      margin-right: 1rem;\n      text-shadow: 1px 3px rgba(0, 0, 0, 0.2); }\n    .navbar a:link,\n    .navbar a:visited {\n      text-decoration: none;\n      color: #FFF; }\n    .navbar__menu--icon {\n      grid-area: \"menu\";\n      justify-self: left;\n      color: #FFF;\n      font-size: 3rem;\n      padding-top: .5rem;\n      margin-left: 1rem; }\n    .navbar__menu--visible {\n      position: absolute;\n      visibility: visible;\n      width: 100vw;\n      height: 100vh;\n      background-color: #FFF;\n      animation: displayMenu .5s ease-in;\n      animation-fill-mode: forwards;\n      overflow: hidden; }\n      .navbar__menu--visible--hidden {\n        position: fixed;\n        visibility: hidden;\n        width: 100vw;\n        height: 100vh;\n        background-color: #FFF;\n        animation: removeMenu .5s ease-out;\n        animation-fill-mode: forwards;\n        overflow: hidden; }\n        .navbar__menu--visible--hidden .hidden {\n          display: none; }\n    .navbar .menu-pages a:link,\n    .navbar .menu-pages a:visited {\n      display: block;\n      text-decoration: none;\n      font-size: 2.5rem;\n      font-family: 'Encode Sans', sans-serif;\n      color: black;\n      margin: auto 1rem;\n      padding: 2rem 0; }\n    .navbar .menu-pages a {\n      border-bottom: 0.1rem solid #000; }\n    .navbar .menu-social-media {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 0.1rem solid #000;\n      margin: auto 1rem; }\n      .navbar .menu-social-media a:link,\n      .navbar .menu-social-media a:visited {\n        display: block;\n        text-decoration: none;\n        font-size: 2.5rem;\n        font-family: 'Encode Sans', sans-serif;\n        color: black;\n        margin: auto 1rem;\n        padding: 2rem 0; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .footer {\n    display: grid;\n    grid-template-areas: \"links\" \"copyright\";\n    align-items: center;\n    justify-content: center;\n    height: auto;\n    width: 100vw;\n    font-size: 1.5rem;\n    font-family: 'Poiret One', cursive;\n    text-align: center;\n    background-color: #5c94bd;\n    border-top: 0.3rem solid #FFF; }\n    .footer a:link,\n    .footer a:visited {\n      text-decoration: none;\n      color: #FFF;\n      font-size: 3rem; }\n      .footer a:link:not(:last-child),\n      .footer a:visited:not(:last-child) {\n        margin-right: 2.2rem; }\n    .footer-copyright {\n      grid-area: \"copyright\";\n      justify-self: center;\n      font-family: 'Quantico', sans-serif;\n      color: #FFF;\n      margin: 1rem 0; }\n    .footer-links {\n      grid-area: \"links\";\n      justify-self: center;\n      margin-top: 2rem; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .home {\n    height: auto; }\n    .home__background-image {\n      height: 76vh;\n      background-image: linear-gradient(233deg, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.73)), url(\"/img/david-tenenbaum2.jpg\");\n      background-size: cover;\n      background-position: center;\n      animation: fadeIn 2s ease-in; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .about {\n    padding: 1rem 2rem;\n    height: auto;\n    font-size: 1.6rem;\n    font-family: 'Quantico', sans-serif;\n    color: #1a3e59;\n    background-image: linear-gradient(to right top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(\"/img/david-tenenbaum-about.jpg\");\n    background-size: cover;\n    background-position: center;\n    animation: fadeIn 2s ease-in; }\n    .about__employment {\n      margin-bottom: 2rem; }\n    .about__skills {\n      margin-bottom: 2rem; }\n    .about__education {\n      margin-bottom: 1rem; }\n      .about__education--school {\n        padding: .5rem 0; }\n    .about li {\n      list-style: none;\n      margin: .5rem auto; }\n    .about i {\n      margin-right: 1rem;\n      color: #1a3e59;\n      font-size: 2.5rem;\n      display: inline-block; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .portfolio-item {\n    display: flex;\n    flex-direction: column;\n    color: #1a3e59;\n    background-color: #FFF;\n    padding: 1rem 0; }\n    .portfolio-item:not(:last-child) {\n      border-bottom: 1px solid #1a3e59; }\n    .portfolio-item-title {\n      color: #1a3e59;\n      font-size: 3rem;\n      font-family: 'Leckerli One', cursive;\n      text-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);\n      margin-left: 2rem;\n      margin-top: .7rem;\n      margin-bottom: .5rem;\n      padding-bottom: 2rem; }\n    .portfolio-item-githubLinks {\n      margin-left: 2rem;\n      margin-right: 2rem;\n      margin-bottom: 2rem;\n      font-size: 1.6rem;\n      font-family: 'Quantico', sans-serif; }\n      .portfolio-item-githubLinks a {\n        color: #1a3e59;\n        text-decoration: none;\n        margin-right: 1rem;\n        padding: .7rem 1.7rem;\n        border: 1px solid #1a3e59;\n        box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2); }\n    .portfolio-item-description {\n      font-size: 1.6rem;\n      font-family: 'Quantico', sans-serif;\n      margin: 1rem 2rem 0 2rem; }\n    .portfolio-item-video {\n      margin: 2.5rem auto;\n      text-align: center; }\n      .portfolio-item-video iframe {\n        width: 80%;\n        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5); } }\n\n.btn {\n  text-decoration: none;\n  padding: .2rem 1rem;\n  background-color: #1a3e59;\n  color: #FFF;\n  border-radius: 100px; }\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Portfolio */ "./src/components/Portfolio.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/App.js";









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems: [{
        title: "Boggle",
        vimeoURL: "https://player.vimeo.com/video/288186446",
        description: "Word game played using a grid of lettered dice, in which players attempt to find words in sequences of adjacent letters",
        githubLinks: {
          "Front-End": "https://github.com/davidtenenbaum87/boggle-frontend",
          "Back-End": "https://github.com/davidtenenbaum87/boggle-backend"
        }
      }, {
        title: "Trello",
        vimeoURL: "https://player.vimeo.com/video/288975230",
        description: "Inspired by Trello.com, this is a fun, flexible and friendly way to organize plans, projects and more",
        githubLinks: {
          "Github": "https://github.com/davidtenenbaum87/Trello-Ruby-on-Rails"
        }
      }, {
        title: "MusicStation",
        vimeoURL: "https://player.vimeo.com/video/288988954",
        description: "Browser-based music library enabling a better music learning experience for musicians. Upload music sheet to your library, automatically search and stream performances from YouTube, and access built-in metronome and tuner for practicing",
        githubLinks: {
          "Front-End": "https://github.com/davidtenenbaum87/Music-Station-FrontEnd",
          "Back-End": "https://github.com/davidtenenbaum87/Music-Station-BackEnd"
        }
      }]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/about",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/portfolio",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__["default"], {
        portfolioItems: this.state.portfolioItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/About.js";



const About = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__employment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-about u-margin-bottom-extra-small u-border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Experience:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-laptop-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), "Software Engineer @", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://integri-data.com/",
    className: "btn u-margin-left-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "IntegriDATA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "January 2019 - Present"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), "Bassist @ David Tenenbaum Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "2013 - Present"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-about u-margin-bottom-extra-small u-border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Core Skills:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__skills--list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-javascript-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), "JavaScript (ES6)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-ruby-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), "Ruby"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-rails-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), "Ruby-on-Rails"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-csharp-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), "C#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-dot-net-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), ".NET Framework"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-html5-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), "HTML5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-css3-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), "CSS3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-sass-original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), "SASS/SCSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-react-original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), "React / Redux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "devicon-postgresql-plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), "SQL / PostgreSQL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-about u-margin-bottom-extra-small u-border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Education:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__education--school",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-graduation-cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), "The Juilliard School / NYC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Master of Music")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__education--school",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-graduation-cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), "Tel-Aviv University / TLV, Israel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Bachelor of Music")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__education--school",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-graduation-cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), "Flatiron School / NYC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Software Engineering Immersive"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-map-marker-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), "New York City"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/Footer.js";


const year = new Date();

const Footer = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "linkedIn",
    href: "https://www.linkedin.com/in/davidtenenbaum87/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "linkedIn",
    href: "https://github.com/davidtenenbaum87",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "linkedIn",
    href: "mailto:david.tenenbaum87@gmail.com?subject=Hello, David!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGoogle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "David Tenenbaum \xA9 ", year.getFullYear()));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/Header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/Home.js";


const Home = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home__background-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/Navbar.js";




class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.toggleMenu = () => {
      if (this.menu.current.className.includes("hidden")) {
        this.menu.current.className = "navbar__menu--visible";
        this.setState({
          isMenuOpen: true
        });
      } else {
        this.menu.current.className = "menu-hidden";
        this.setState({
          isMenuOpen: false
        });
      }
    };

    this.menu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    let icon = this.state.isMenuOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimes"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBars"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar__menu--icon",
      onClick: this.toggleMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar__name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/",
      className: "navbar-link-home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "David Tenenbaum"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar__menu--hidden",
      ref: this.menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar__menu--visible",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/about",
      className: "menu__pages--about",
      onClick: this.toggleMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/portfolio",
      className: "menu__pages--portfolio",
      onClick: this.toggleMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "./David-Tenenbaum-CV.pdf",
      target: "_blank",
      className: "menu__pages--resume",
      onClick: this.toggleMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu__visible--social-media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/davidtenenbaum87/",
      className: "linkedIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/davidtenenbaum87",
      className: "github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "mailto:david.tenenbaum87@gmail.com?subject=Hello, David!",
      className: "gmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGoogle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortfolioItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioItem */ "./src/components/PortfolioItem.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/Portfolio.js";



const Portfolio = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    portfolioItemInfo: props.portfolioItems[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    portfolioItemInfo: props.portfolioItems[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    portfolioItemInfo: props.portfolioItems[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/components/PortfolioItem.js":
/*!*****************************************!*\
  !*** ./src/components/PortfolioItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/components/PortfolioItem.js";


const PortfolioItem = ({
  portfolioItemInfo
}) => {
  const githubLinks = Object.entries(portfolioItemInfo.githubLinks).map((link, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: index,
      href: link[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: undefined
    }, link[0], " \u2192");
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "portfolio-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, portfolioItemInfo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item-githubLinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, githubLinks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "portfolio-item-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, portfolioItemInfo.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item-video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: portfolioItemInfo.title,
    src: portfolioItemInfo.vimeoURL,
    frameBorder: "none",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), document.querySelector('#root'));

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/main.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/main.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/davidtenenbaum/Desktop/website/david-tenenbaum-website/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map