import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange() {
        this.setState({
            password: event.target.value
        });
    }

    handleLogin() {
        this.context.store.dispatch(/* */);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form action="javascript:void(0);" className="card">
                        <h1 className="text-center">Log In</h1>
                        {
                            this.props.error ?
                                (<div className="alert alert-danger"> { this.props.error } </div>) : ""
                        }
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input className="form-control" id="email" type="text"
                                   onChange={ this.handleEmailChange.bind(this) }/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password"
                                   onChange={ this.handlePasswordChange.bind(this) }/>
                        </div>
                        <button className="btn btn-block btn-primary" onClick={ this.handleLogin.bind(this) }>Login In</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.auth.error
    }
}

export default connect(
    mapStateToProps
)(Login);