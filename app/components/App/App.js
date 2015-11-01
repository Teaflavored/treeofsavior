import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar.js";
import { pushState } from "redux-router";
import { isLoggedIn } from "../../actions/authActions.js";

import styles from "./App.style.js";

class App extends Component {
    render() {
        const { children, pushState, isLoggedIn } = this.props;

        return (
            <div className="app">
                <Navbar { ...this.props } />
                <div className="main-content container" style={ styles.mainContainer }>
                    {children && React.cloneElement(children, {
                        pushState,
                        isLoggedIn
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
};

App.contextTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        isLoggedIn: isLoggedIn(state)
    };
}

App = connect(
    mapStateToProps,
    { pushState: pushState }
)(App);

export default App;