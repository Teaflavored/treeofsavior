import React, { Component, PropTypes } from "react";
import { createUser } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleEmailChange(event) {
        this.setState(
            {email: event.target.value}
        );
    }

    handlePasswordChange(event) {
        this.setState(
            {password: event.target.value}
        );
    }

    handleSignup() {
        this.context.store.dispatch(createUser(this.state));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset4">
                    <form action="javascript:void(0);">
                        <h1>Sign up</h1>

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
                        <button className="btn btn-primary" onClick={ this.handleSignup.bind(this) }>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

Signup.contextTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(Signup);