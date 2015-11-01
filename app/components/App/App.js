import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../Navbar/Navbar.js";
import { pushState, replaceState } from "redux-router";
import { isLoggedIn, logoutUser } from "../../actions/authActions.js";

import styles from "./App.style.js";

class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn != this.props.isLoggedIn) {
            this.props.pushState(null, "/");
        }
    }

    render() {
        const { children, pushState, isLoggedIn, replaceState } = this.props;
        let logout = bindActionCreators(logoutUser, this.context.store.dispatch);

        return (
            <div className="app">
                <Navbar { ...Object.assign({}, this.props, { logout }) } />
                <div className="main-content container" style={ styles.mainContainer }>
                    {children && React.cloneElement(children, {
                        pushState,
                        replaceState,
                        isLoggedIn
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
    replaceState: PropTypes.func.isRequired
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
    {
        pushState,
        replaceState
    }
)(App);

export default App;