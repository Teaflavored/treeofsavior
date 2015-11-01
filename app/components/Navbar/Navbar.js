import Nav from "../Navbar/Navbar.js";
import React, { Component, PropTypes } from "react";
import { IndexLink, Link } from "react-router";
import styles from "./Navbar.style.js";

class Navbar extends Component {
    handleLogout() {
        this.props.logout();
    }

    getLoginNav() {
        if (!this.props.isLoggedIn) {
            return (
                <li><Link className="nav-btn" activeClassName="active" to="/login" style={ styles.navBtn }>Login</Link></li>
            )
        } else {
            return "";
        }
    }

    getSignupNav() {
        if (!this.props.isLoggedIn) {
            return (
                <li><Link className="nav-btn" activeClassName="active" to="/signup" style={ styles.navBtn }>Sign up</Link></li>
            );
        } else {
            return "";
        }
    }

    getLogoutNav() {
        if (this.props.isLoggedIn) {
            return (
                <li><a className="nav-btn" href="javascript:void(0);" onClick={ this.handleLogout.bind(this) } style={ styles.navBtn } >Log Out</a></li>
            );
        } else {
            return "";
        }
    }

    render() {
        return (
            <div id="navbar" className="navbar navbar-fixed-top" style={ styles.navbar }>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navigationItems" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1 style={ styles.brandHeader }>
                            <IndexLink to="/" className="navbar-brand" style={ styles.brandHeaderLink }>
                                Tree of Savior
                            </IndexLink>
                        </h1>
                    </div>
                    <div className="collapse navbar-collapse" id="navigationItems">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link className="nav-btn" activeClassName="active" to="/builds" style= { styles.navBtn }>Builds</Link></li>
                            { this.getLoginNav() }
                            { this.getSignupNav() }
                            { this.getLogoutNav() }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default Navbar;

