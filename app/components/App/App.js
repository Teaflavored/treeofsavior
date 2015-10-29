import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar.js";
import { pushState } from "redux-router";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <div className="main-content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

connect(
    { pushState }
)(App);

App.propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
};

export default App;