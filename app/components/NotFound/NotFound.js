import React, { Component, PropTypes } from "react";

class NotFound extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="card">
                        <h1><b>Error 404</b></h1>
                        <h2><b>Page not found</b></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;