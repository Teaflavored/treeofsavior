import Nav from "../Navbar/Navbar.js";
import React, { Component, PropTypes } from "react";
import { IndexLink, Link } from "react-router";

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navigationItems" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1>
                            <IndexLink to="/" className="navbar-brand">
                                Tree of Savior
                            </IndexLink>
                        </h1>
                    </div>
                    <div className="collapse navbar-collapse" id="navigationItems">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link className="nav-btn" activeClassName="active" to="/login">Login</Link></li>
                            <li><Link className="nav-btn" activeClassName="active" to="/signup">Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};
