import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar.js";
import { pushState } from "redux-router";
import styles from "./App.style.js";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <div className="main-content container" style={ styles.mainContainer }>
                    { this.props.children }
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
    return {};
}

App = connect(
    mapStateToProps,
    { pushState: pushState }
)(App);

export default App;